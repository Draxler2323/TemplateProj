const router = require('express').Router()
const catController=require('../controllers/categoryController')

router.get('/' ,catController.getAll)
 .get('/:id' ,catController.getCategoryById)
 .post('/add',catController.createCategory)
 .put('/edit/:id',catController.updateCategory)
 .delete('/del/:id',catController.deleteCategory)
 

module.exports  = router