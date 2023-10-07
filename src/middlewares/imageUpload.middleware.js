<<<<<<< HEAD
const multer = require('multer')
const path = require('node:path')

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, '../../public'),
    filename: (req, file, cb) => {
      const date = Date.now()
      cb(null, `${date}-${file.originalname}`)
=======
const multer = require("multer");
const path = require("node:path");

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, "../../public"),
    filename: (req, file, cb) => {
      const date = Date.now();
      cb(null, `${date}-${file.originalname}`);
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653
    },
  }),
  limits: {
    fileSize: 500 * 1024, // 500 kB
  },
  fileFilter: (req, file, cb) => {
<<<<<<< HEAD
    if (!file.mimetype.includes('image')) {
      return cb({
        status: 400,
        error: 'File not accepted',
        message: 'Only images files are allowed',
      })
    }
    cb(null, true)
  },
})

module.exports = upload
=======
    if (!file.mimetype.includes("image")) {
      return cb({
        status: 400,
        error: "File not accepted",
        message: "Only images files are allowed",
      });
    }
    cb(null, true);
  },
});

module.exports = upload;
>>>>>>> fcc5275e6a8156e8eda245fa6518585950c98653
