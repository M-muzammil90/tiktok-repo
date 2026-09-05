"use client";

import React from "react";

interface Video {
  _id: string;
  title: string;
  description: string;
  videoURL: string;
  thumbnailUrl: string;
  controls?: boolean;
  transformations?: {
    height?: number;
    width?: number;
    quality?: number;
  };
  createdAt?: string;
}

function Page() {
  const [videos, setVideos] = React.useState<Video[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const fetchVideos = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/auth/videos", {
        method: "GET",
        cache: "no-store",
      });

      const data = await response.json();

      console.log("VIDEOS:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to fetch videos");
      }

     setVideos(data.videos);
    } catch (error) {
      console.error(error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            All Videos
          </h1>

          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-gray-500">
              Loading videos...
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            All Videos
          </h1>

          <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-600">
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              All Videos
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {videos.length} videos available
            </p>
          </div>

          <button
            onClick={fetchVideos}
            className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            Refresh
          </button>
        </div>

        {/* Empty */}
        {videos.length === 0 ? (
          <div className="flex min-h-[300px] items-center justify-center rounded-2xl bg-white shadow">
            <p className="text-gray-500">
              No videos found.
            </p>
          </div>
        ) : (
          /* Grid */
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {videos.map((video) => (
              <div
                key={video._id}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Thumbnail */}
                <div className="aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={video.thumbnailUrl}
                    alt={video.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="line-clamp-1 text-lg font-bold text-gray-900">
                    {video.title}
                  </h2>

                  <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                    {video.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600">
                      Quality:{" "}
                      {video.transformations?.quality ?? 100}%
                    </span>

                    {video.createdAt && (
                      <span className="text-xs text-gray-400">
                        {new Date(
                          video.createdAt
                        ).toLocaleDateString()}
                      </span>
                    )}
                  </div>

                  {/* Watch */}
                  <a
                    href={video.videoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block w-full rounded-lg bg-gray-900 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-gray-800"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;