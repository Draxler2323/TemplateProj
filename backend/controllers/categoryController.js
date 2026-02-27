const modelcat=require('../models/categoryModel')

exports.getAll =function (req, res) {
    modelcat.getAllCategory((err, data)=> {
        if (err) throw err;
        res.json(data)
    });
};
exports.getCategoryById =function (req, res) {
    modelcat.getCategoryById(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json(data.row)
    });
};
exports.deleteCategory =function (req, res) {
    modelcat.deleteCategory(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json({message:'category deleted successfully'})
    });
};
exports.createCategory= function(req, res) {
    const newData={
        cat_nom:req.body.catnom
    }
    modelcat.createCategory(newData, (err, result)=>{
        if (err) throw err,
        res.json({message:'category created successfully'})
    });
};
exports.updateCategory= function(req, res) {
    const updateCategory={
        cat_nom:req.body.cat_nom
    };
    modelcat.updateCategory(req.params.id,updateCategory, (err, result)=>{
        if (err) throw err,
        res.json({message:'category updated successfully'})
    });
};