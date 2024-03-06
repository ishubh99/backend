import {v2 as cloudinary} from "cloudinary"
import exp from "constants";
import fs from "fs";
       
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null

       const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("uploaded",response.url);
        return response;
    }
     catch(error){
        fs.unlinkSync(localFilePath) // reomve the locally saved temp file as upload got failed
        return null;
     }
}

export {uploadOnCloudinary}



