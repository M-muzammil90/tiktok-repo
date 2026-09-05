"use client";

import {
  ImageKitAbortError,
  ImageKitInvalidRequestError,
  ImageKitServerError,
  ImageKitUploadNetworkError,
  upload,
} from "@imagekit/next";
import { ChangeEvent, useRef, useState } from "react";

interface FileUploadProps {
  Onsuccess: (res: any) => void;
  onProgress: (progress: number) => void;
  filetype?: "image" | "video";
}
const FileUpload = ({ Onsuccess, onProgress, filetype }: FileUploadProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ValidationFile = (file: File) => {
    if (filetype === "video" && !file.type.startsWith("video/")) {
      setError("Please upload a valid video file");
      return false;
    }

    if (filetype === "image" && !file.type.startsWith("image/")) {
      setError("Please upload a valid image file");
      return false;
    }

    if (file.size > 100 * 1024 * 1024) {
      setError("Your file must be less than 100MB");
      return false;
    }
    return true;
  };

  const HandleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file || !ValidationFile(file)) return;

    setLoading(true);
    setError(null);

    try {
      const authRes = await fetch("/api/imgakit-auth");
      const auth = await authRes.json();
      const response = await upload({
        file,
        fileName: file.name,
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY!,
        signature: auth.signature,
        expire: auth.expire,
        token: auth.token,
        onProgress: (event) => {
          if(event.lengthComputable || onProgress){
        const persectage = (event.loaded / event.total) * 100;
        onProgress(Math.round(persectage))
          }
        },
      });
      Onsuccess(response);
    } catch (error) {
      console.error("upload filed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <input
        type="file"
        accept={filetype === "video" ? "video/*" : "image/*"}
        onChange={HandleFileChange}
      />
      {loading && <span>file Loading....</span>}
    </>
  );
};

export default FileUpload;
