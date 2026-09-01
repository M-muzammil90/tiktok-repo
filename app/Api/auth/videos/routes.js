import Video from "../../../../models/vedio.models.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    Databaseconneaction();
    const videos = await Video.findOne({});
    if (!videos || !videos.length === 0) {
      return NextResponse.json([],{status:500});
    }

    return NextResponse(videos);
  } catch (error) {
    return NextResponse.json({
      error: "Videos get error",
    },{status:401});
  }

}
  export async function POST(request){
    try {
        const session = await getServerSession(authOptions);
        if(!session){
            return NextResponse.json({error:"Unauthorized"},{status:401});
        }
      await Databaseconneaction();
      
    } catch (error) {
        
    }
  }