import fs from 'fs';
const path = 'src/assets/images';
const imagePath = global.appRoot + "/" + path;

class DeleteImage {
    req;

    constructor(req){
        this.req = req;
        this.delete();
    }

    delete(){
        const fileName = this.req.file.filename;
        const targetFile = `${imagePath}${fileName}`;

        if(fileName.split('.')[0] !== 'default' ||
           fileName.split('.')[0] !== 'avatar') {
               if(fs.existsSync(targetFile)){
                   try {
                       fs.unlinkSync(targetFile);
                   } catch (error) {
                       console.log(error);
                   }
               }
           }
    }
}

export default DeleteImage;