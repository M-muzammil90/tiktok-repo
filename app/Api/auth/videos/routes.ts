import { NextRequest, NextResponse } from "next/server";
import Video, { IVEDEO } from "../../../../models/vedio.models";
import { Databaseconneaction } from "@/app/lib/config";
import { getServerSession } from "next-auth";
import { authoption } from "@/app/lib/auth";
export async function GET() {
  try {
    await Databaseconneaction();
    const videos = await Video.findOne({});
    if (!videos || videos.length === 0) {
      return NextResponse.json([], { status: 500 });
    }

    return NextResponse.json(videos);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Videos get error",
      },
      { status: 401 },
    );
  }
}
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authoption);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    await Databaseconneaction();
    const body: IVEDEO = await request.json();
    if (
      !body.title ||
      !body.description ||
      !body.videoURL ||
      !body.thumbnailUrl
    ) {
      return NextResponse.json(
        { error: "All Feildes are required" },
        { status: 400 },
      );
    }

    const viderOption ={
      ...body,
      controls:body?.controls ?? true,

    }

    const savedata = await Video.create(viderOption)

    


  } catch (error) {}
}
