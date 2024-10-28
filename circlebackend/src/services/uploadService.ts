import cloudinary from "../libs/cloudinary";

export const uploadToCloudinary = async (file: Express.Multer.File) => {
   const base64 = Buffer.from(file.buffer).toString("base64");
   //    data:image/jpeg;base64,file
   const dataURI = `data:${file.mimetype};base64,${base64}`;

   const cloudinaryResponse = await cloudinary.uploader.upload(dataURI, {
      folder: "circle-b57",
   });
   return cloudinaryResponse.secure_url;
};

export const deleteFromCloudinary = async (url: string) => {
   await cloudinary.uploader.destroy(url);
};
