import mongoose from 'mongoose'
import {NODE_ENV,DEV_DB_URL,PROD_DB_URL} from './serverConfig.js'

const connectDB = async()=>{
    try {

        if (NODE_ENV === 'development') {
            mongoose.connect(DEV_DB_URL)
            
        } else {
            mongoose.connect(PROD_DB_URL)
        }
        
    } catch (error) {
        console.log(`MongoDB Connection Error: ${error}`)
    }
}

export {connectDB}