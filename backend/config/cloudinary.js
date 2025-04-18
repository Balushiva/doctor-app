import {v2 as cloudinary} from 'cloudinary';
export const connectcloudinary = async () => {
    try {
        cloudinary.config({
            cloud_name: process.env.cloudinaryname,
            api_key: process.env.cloudinarykey,
            api_secret: process.env.cloudinarysecret
        });
        console.log('Cloudinary connected successfully');
    } catch (error) {
        console.error('Error connecting to Cloudinary:', error);
    }
};
