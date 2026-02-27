const router = require('express').Router()
const matController=require('../controllers/materielController')

router.get('/' ,matController.getAll)
 .get('/:id' ,matController.getMaterielById)
 .post('/add',matController.createMateriel)
 .put('/edit/:id',matController.updateMateriel)
 .delete('/del/:id',matController.deleteMateriel)
 

module.exports  = router