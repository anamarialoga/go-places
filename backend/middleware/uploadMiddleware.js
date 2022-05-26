const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "D:/Repos/go-places/frontend/public/uploads");
    }, 
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

module.exports = {storage, fileFilter};