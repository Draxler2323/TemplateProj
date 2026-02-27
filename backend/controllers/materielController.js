const modelmat=require('../models/MaterielModel')

exports.getAll =function (req, res) {
    modelmat.getAllMateriel((err, data)=> {
        if (err) throw err;
        res.json(data)
    });
};
exports.getMaterielById =function (req, res) {
    modelmat.getMaterielById(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json(data.row)
    });
};
exports.deleteMateriel =function (req, res) {
    modelmat.deleteMateriel(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json({message:'Materiel deleted successfully'})
    });
};
exports.createMateriel= function(req, res) {
    const newData={
        libelle:req.body.libelle,
        quantite:req.body.quantite
    }
    modelmat.createMateriel(newData, (err, result)=>{
        if (err) throw err,
        res.json({message:'materiel created successfully'})
    });
};
exports.updateMateriel= function(req, res) {
    const updateMateriel={
        libelle:req.body.libelle,
        quantite:req.body.quantite
    };
    modelmat.updateMateriel(req.params.id,updateMateriel, (err, result)=>{
        if (err) throw err,
        res.json({message:'materiel updated successfully'})
    });
};