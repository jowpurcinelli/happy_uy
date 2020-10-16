//package that deals with image upload

import multer from 'multer';
import path from 'path';

export default {
    storage: multer.diskStorage({
        destination:  path.join(__dirname, ' ..', '..', 'uploads') ,// '..', '..' are for returnind pages to find the upload folder. Separated using commas because  the paths are differently deppending on the of the user. With the comma, path.join() can change itself :)   
        filename: (request, file, cb) =>  {
            const fileName = `${Date.now( )} - ${file.originalname}`;

            cb(null, fileName)
        },
    })
};
