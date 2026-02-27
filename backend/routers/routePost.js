const router = require('express').Router()
const postController=require('../controllers/postController')
const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null, "./public/images");
    },
    filename: function (req, file, cb) {
        return cb(null, Date.now() + "-" + file.originalname);
    },
});
const upload = multer ({storage: storage});
router
.get('/' ,postController.getAllPoste)
.get('/postcategorie/:id' ,postController.getPosteCategorie)
.get('/admin/' ,postController.getAllPosteAdmin)
 .get('/:id' ,postController.getPosteById)
 .post('/add', upload.single("image"), postController.createPoste)
 .put('/edit/:id',postController.updatePoste)
 .delete('/del/:id',postController.deletePoste
 )
 

module.exports  = router