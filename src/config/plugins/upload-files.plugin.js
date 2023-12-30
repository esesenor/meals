import multer from 'multer'

const storage = multer.memoryStorage();

const upload = multer({storage});

//Importar 1 archivo
export const uploadSingle = (filname) => upload.single(filname)

//Importar maxFilesNumber archivos
//export const uploadArr = (filname, maxFilesNumber) => upload.array(filname, 9)