const router = require('express').Router()
const aboutContr=require('../controllers/aboutController')
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
// .get('/' ,aboutContr.getAllContactAdmin)
// .get('/postcategorie/:id' ,aboutContr.getPosteCategorie)
.get('/' ,aboutContr.getAllAboutAdmin)
.get('/blog/about' ,aboutContr.getAbouteAll)
//  .get('/:id' ,aboutContr.getPosteById)
 .post('/add', upload.single("image"), aboutContr.createAbout)
//  .put('/edit/:id',aboutContr.updatePoste)
//  .delete('/del/:id',aboutContr.deletePoste)
 

module.exports  = router