import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        })
        console.log(response)
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}

export const deleteFromCloudinary = async (localFilePath) => {
    try {
        const result = await cloudinary.uploader.destroy(localFilePath);
        console.log('Delete Result:', result);
    } catch (error) {
        console.error('Error deleting file:', error);
    }
};