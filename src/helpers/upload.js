import multer from 'multer';
import path from 'path';

class Upload {
    storage;
    file_filter;
    upload;
    
    constructor() {
        this.setStorage();
        this.setFileFilter();
        this.setUpload();
    }

    setStorage() {
        const storage = multer.diskStorage({
            destination: path.join('src/assets/images/'),
            /** Rename file to ISO Date */
            filename: function (req, file, cb) {
                const originalName = file.originalname.split(' ');
                const newName = originalName.join('-');
                cb(null, new Date().toISOString() + newName);
            }
        });

        this.storage = storage;
    }

    setFileFilter(req, file, cb) {
        const fileFilter = function(req, file, cb) {
            const mimeTypes = [
                'image/jpeg',
                'image/png'
            ]
            if (mimeTypes.find(item => item === file.mimetype)) {
                cb(null, true);
            } else {
                // reject files
                req.uploadError = true;
                cb(null, false);
            }
        }

        this.file_filter = fileFilter;
    };

    setUpload() {
       const upload = multer({
           storage: this.storage,
           limits: {
               fileSize: 1024 * 1024 * 3
            },
            fileFilter: this.file_filter
        });

        this.upload = upload;
   }
}

export default new Upload().upload;