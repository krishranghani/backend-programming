const multer = require('multer');

const storage = multer.diskStorage({
    destination:function (req, file, cb){
        cb(null ,'public/images')
    },
    filename : function (req, file,cb){
        cb(null,`${date.now()}_${file.originalname}`);
    }
})

exports.upload = multer({ storage : storage})