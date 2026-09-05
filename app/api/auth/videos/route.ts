import { NextRequest, NextResponse } from "next/server";
import Video, { IVEDEO } from "../../../../models/vedio.models";
import { Databaseconneaction } from "@/app/lib/config";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
export async function GET() {
  try {
    await Databaseconneaction();

    const videos = await Video.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        videos,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("VIDEOS GET ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Videos get error",
      },
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    await Databaseconneaction();

    const body = await request.json();

    if (
      !body.title ||
      !body.description ||
      !body.videoURL ||
      !body.thumbnailUrl
    ) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const videoOption = {
      title: body.title,
      description: body.description,
      videoURL: body.videoURL,
      thumbnailUrl: body.thumbnailUrl,

      controls: body.controls ?? true,

      transformations: {
        height: 1920,
        width: 1080,
        quality: body.quality ?? 100,
      },
    };

    const savedData = await Video.create(videoOption);

    return NextResponse.json(
      {
        message: "Video created successfully",
        video: savedData,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("VIDEO CREATE ERROR:", error);

    return NextResponse.json(
      { error: "Server error: Failed to create video" },
      { status: 500 }
    );
  }
}
