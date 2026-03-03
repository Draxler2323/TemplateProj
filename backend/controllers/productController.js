const modelprod=require('../models/productModel')

exports.getAll =function (req, res) {
    modelprod.getAllProduct((err, data)=> {
        if (err) throw err;
        res.json(data)
    });
};
exports.getProductById =function (req, res) {
    modelprod.getProductById(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json(data.row)
    });
};
exports.deleteProduct =function (req, res) {
    modelprod.deleteProduct(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json({message:'Product deleted successfully'})
    });
};
exports.createProduct= function(req, res) {
    const newData={
        libelle:req.body.libelle_prod,
        qte:req.body.qte_prod
    }
    modelprod.createProduct(newData, (err, result)=>{
        if (err) throw err;
        res.json({message:'Product created successfully'})
    });
};
exports.updateProduct= function(req, res) {
    const updateProduct={
        libelle:req.body.libelle_prod,
        qte:req.body.qte_prod
    };
    modelprod.updateProduct(req.params.id,updateProduct, (err, result)=>{
        if (err) throw err,
        res.json({message:'Product updated successfully'})
    });
};