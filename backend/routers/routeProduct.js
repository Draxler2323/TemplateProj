const router = require('express').Router()
const prodController=require('../controllers/productController')

router.get('/' ,prodController.getAll)
 .get('/:id' ,prodController.getProductById)
 .post('/addprod',prodController.createProduct)
 .put('/edit/:id',prodController.updateProduct)
 .delete('/del/:id',prodController.deleteProduct)
 

module.exports  = router