const multer = require('multer');
const fs = require('fs');


const uploadFolder = './src/uploads';
if (!fs.existsSync(uploadFolder)) {
  fs.mkdirSync(uploadFolder, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src/uploads/'); 
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 }});

module.exports = upload;
