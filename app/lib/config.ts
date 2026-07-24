
import mongoose, { Mongoose } from 'mongoose'


const MONGO_URL = process.env.MONGO_URL!

if(!MONGO_URL){
    throw new Error("plese MONGO_URL is required MONGO_URL without not accept your MONGO_URL connect")
}

let chated = global.mongoose

if(!chated){
    chated = global.mongoose={conn:null,promise:null}
}

export async function DatabaseConnection(){
    if(chated.conn){
        return chated.conn
    }
    if(!chated.promise){
        const option ={
            bufferCommands:true,
            MaxPoolSize:10
        }
    chated.promise = mongoose.connect(MONGO_URL,option).then(()=>mongoose.Connection)
    }
    try {
        chated.conn = await chated.promise    
    } catch (error) {
        chated.promise = null
        throw error
    }

    return chated.conn
    
}