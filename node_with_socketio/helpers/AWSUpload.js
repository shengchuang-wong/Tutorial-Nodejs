const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const secret =  require('../secret/secret-file');

AWS.config.update({
    accessKeyId: secret.aws.accessKeyId,
    secretAccessKey: secret.aws.secretAccessKey,
    region: 'ap-southeast-1'
});

const S0 = new AWS.S3({});

const upload = multer({
    storage: multerS3({
        s3: S0,
        bucket: 'nodewithsocketio',
        acl: 'public-read',
        metadata(req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        key(req, file, cb) {
            cb(null, file.originalname);
        },
        rename(fieldName, fileName) {
            return fieldName.replace(/\W+/g, '-');
        }
    })
});

exports.Upload = upload;