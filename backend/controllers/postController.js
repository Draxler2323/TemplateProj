const db = require('../config/Database');
const modelpost=require('../models/postModel')

exports.getPosteCategorie =function (req, res) {
    modelpost.getPosteCategorie(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json(data)
    });
};
exports.getAllPosteAdmin =function (req, res) {

     const page=parseInt(req.query.page) || 1

     const limit=parseInt(req.query.limit) || 5
     const offset=(page-1)*limit;
     //nombre de ligne 
     const countQuery="select count(*) as total from poste";
     const dataQuery='select \
                categorie.cat_nom,\
                poste.titre,\
                poste.contenu,\
                poste.cat_id,\
                poste.date_poste,\
                poste.id,\
                poste.image\
                from  categorie,poste \
            where categorie.id=poste.cat_id order by poste.id desc\
            LIMIT ? OFFSET ?'

            db.query(countQuery,(err,countResult)=>{
                if(err) return console.error("erreur:",err) 
                const total=countResult[0].total
                const totalPages=Math.ceil(total/limit)
                modelpost.getAllPoste(dataQuery,[limit,offset],(err,dataResult)=>{
                    if (err) throw err;
                    res.json({
                        data:dataResult,
                        page,
                        totalPages,
                        total
                    })
                })


            })

};
exports.getAllPoste =function (req, res) {

    const page=parseInt(req.query.page) || 1

    const limit=parseInt(req.query.limit) || 4
    const offset=(page-1)*limit;
    //nombre de ligne 
    const countQuery="select count(*) as total from poste";
    const dataQuery='select \
               categorie.cat_nom,\
               poste.titre,\
               poste.date_poste,\
               poste.contenu,\
               poste.cat_id,\
               poste.id,\
               poste.image\
               from  categorie,poste \
           where categorie.id=poste.cat_id order by poste.id desc\
           LIMIT ? OFFSET ?'

           db.query(countQuery,(err,countResult)=>{
               if(err) return console.error("erreur:",err) 
               const total=countResult[0].total
               const totalPages=Math.ceil(total/limit)
               modelpost.getAllPoste(dataQuery,[limit,offset],(err,dataResult)=>{
                   if (err) throw err;
                   res.json({
                       data:dataResult,
                       page,
                       totalPages,
                       total
                   })
               })


           })

};
exports.getPosteById =function (req, res) {
    modelpost.getPosteById(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json(data)
    });
};
exports.deletePoste =function (req, res) {
    modelpost.deletePoste(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json({message:'post deleted successfully'})
    });
};
exports.createPoste= function(req, res) {
    const image = req.file ? req.file.filename : null;
    const {titre, contenu, cat_id}= req.body;
    if (!req.file) {
        res.status(400).send("no file upload")
    }
    // const newData={
    //     titre:req.body.titre,
    //     contenu:req.body.contenu,
    //     // image:req.body.image,
    //     cat_id:req.body.cat_id
    // }
    // modelpost.createPoste(newData, (err, result)=>{
    //     if (err) throw err,
    //     res.json({message:'post created successfully'})
    modelpost.createPoste({titre, contenu, image, cat_id}, (err, result)=>{
        if (err) throw err,
        res.json({message:'post created successfully'})
    });
};
exports.updatePoste= function(req, res) {
    const updatePoste={
        titre:req.body.titre,
        // image:req.body.image,
        cat_id:req.body.cat_id
    };
    modelpost.updatePoste(req.params.id,updatePoste, (err, result)=>{
        if (err) throw err,
        res.json({message:'category updated successfully'})
    });
};