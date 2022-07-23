const multer= require("multer")
const storage= multer.diskStorage(
    {
        destination: (req,file, cb) =>{
            cb(null, "uploads/images")
        },
        filename: (req, file, cb) =>{
            cb(null, Date.now()+"-"+file.originalname)
        }

    }
)
var upload= multer({storage: storage})

module.exports= upload;