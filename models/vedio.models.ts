import mongoose, { Schema, models, model, Mongoose } from "mongoose";

export const VIDEO_DIMENTIONS = {
  height: 1080,
  width: 1920,
} as const;

export interface IVEDEO {
  _id?: mongoose.Types.ObjectId;
  title: String;
  description: String;
  videoURL: String;
  thumbnailUrl: String;
  controls: Boolean;
  transformations: {
    height: Number;
    width: Number;
    quality: Number;
  };
}

const VideoScehma = new Schema<IVEDEO>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    videoURL:{type:String,required:true},
    thumbnailUrl:{type:String,required:true},
    controls:{type:Boolean,default:true},
    transformations:{
        height:{type:Number,default:VIDEO_DIMENTIONS.height},
        width:{type:Number,default:VIDEO_DIMENTIONS.width},
        quality:{type:Number,min:1,max:100}
    }
  },
  { timestamps: true },
);

const Video = models?.Video || model<IVEDEO>("Video",VideoScehma)

export default Video
