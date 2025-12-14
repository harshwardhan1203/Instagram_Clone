const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "user_uploads",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    transformation: [{ width: 1080, height: 1080, crop: "limit" }],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

module.exports = upload;
