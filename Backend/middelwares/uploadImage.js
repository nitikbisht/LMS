const multer  = require('multer')
const fs=require('fs')
const uploadImage=async (req,res,next)=>{
    clg
    const upload = multer({ dest: 'Images' })
    try{
        upload.single('image')
        console.log("image uploaded")
        next()
    }
    catch(e){
        console.log(e.message)
        res.status(400).send(e.message)
    }
}

module.exports={
    uploadImage
}