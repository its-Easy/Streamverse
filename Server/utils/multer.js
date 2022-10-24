const multer = require("multer");
const path = require("path");


module.exports = multer({
    storage: multer.diskStorage({
        destination: "./uploads",
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    }),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if (ext !== ".mp4") {
            cb(new Error("File type is not supported"), false);
            return;
        }
        cb(null, true);
    },
});