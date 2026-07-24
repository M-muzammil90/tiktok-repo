import mongoose,{Schema, models, model} from "mongoose";
import bcrypt from "bcrypt"

export interface IUser{
    id?:String,
    username:String,
    email:String,
    password:String,
    CreatedAt:true,
    UpdatedAt:true,
}

const UserSchema = new Schema<IUser>({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
     password:{
        type :String,
        required:true,

    }

},{timestamps:true})

const User = models?.User || model<IUser>("User",UserSchema)

export default User

UserSchema.pre("save", async function(next){
    if(this.isModified,this.password)
    this.password = await bcrypt.hash(this.password,10)
    next()
})