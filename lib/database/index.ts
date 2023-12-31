import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI


let chached = (global as any).mongoose || {
    conn : null , promise : null 
}


export const connectToDatabase = async () => {
    if(chached.conn){
        return chached.conn;
    }
    if(!MONGODB_URI)
        throw new Error("Please define the MONGODB_URI environment variable inside .env.local")
    
        chached.promise = chached.promise || mongoose.connect(MONGODB_URI , {
            dbName:'NILI',
            bufferCommands:false
        })

        chached.conn = await chached.promise

        return chached.conn
}