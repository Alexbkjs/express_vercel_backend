require('dotenv').config();

const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const path = require('path');


// Function to upload files to Cloudinary
async function uploadFiles(filePaths) {
    try {
        const results = await Promise.all(
            filePaths.map(filePath => {
                // Construct the full path to the file
                const fullPath = path.resolve(__dirname, filePath);

                // Upload file to Cloudinary
                return cloudinary.uploader.upload(fullPath);
            })
        );

        // Log results
        results.forEach(result => {
            console.log(result);
        });

    } catch (error) {
        console.error('Error uploading files to Cloudinary:', error);
    }
}

// Example usage: Array of file paths to upload
const filesToUpload = [
    '../images/quests/adventure.png',
    '../images/quests/basic.png',
    '../images/quests/mini_boss.png',
    '../images/quests/reusable.png',
    '../images/quests/routine.png',
    '../images/quests/team.png'
];

// Call the function to upload files
uploadFiles(filesToUpload);