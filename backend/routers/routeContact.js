const router = require('express').Router()
const contController=require('../controllers/contactController')
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
// .get('/' ,contController.getAllContactAdmin)
// .get('/postcategorie/:id' ,contController.getPosteCategorie)
.get('/' ,contController.getAllContactAdmin)
//  .get('/:id' ,contController.getPosteById)
 .post('/add', upload.single("image"), contController.createContact)
//  .put('/edit/:id',contController.updatePoste)
//  .delete('/del/:id',contController.deletePoste)
 

module.exports  = router