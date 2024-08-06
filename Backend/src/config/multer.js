const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');
// const dotenv = require('dotenv');
const path = require('path');  

// dotenv.config();
console.log(process.env.BUCKET_NAME);
aws.config.update({
    region:process.env.REGION,
    secretAccessKey:process.env.SECRET_ACCESS_KEY,
    accessKeyId:process.env.ACCESS_KEY_ID
});
 

const s3 = new aws.S3();
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket:process.env.BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
            const ext = path.extname(file.originalname);
            cb(null, Date.now().toString() + ext); 
        }
    })
});

module.exports = upload;
