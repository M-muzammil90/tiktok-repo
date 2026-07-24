import mongoose from "mongoose";

import {DatabaseConnection} from '@/app/lib/config'
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user.Models";


export async function POST(request:NextRequest){
   try {
     const reqbosy = await request.json()
     const {username ,email,password}:any = reqbosy
   
      if (!email || !password) {
        return NextResponse.json({error:"email and password requred"},{status:400})
      }
     
    await DatabaseConnection();
 
     const user = await User.findOne({email})
     if(user){
         return NextResponse.json({error:"this email already exsite"})
     }
 
    const newuser =  await User.create({
         email,
         username,
         password
     })
   await newuser.save()
 
     return NextResponse.json({message:"Your new User successfly esiste"},{status:201})
   } catch (error:any) {
     return NextResponse.json({error:error.message})
   }

   
}