const db = require('../config/Database');
const modelcont=require('../models/contactModel')

// exports.getPosteCategorie =function (req, res) {
//     modelcont.getPosteCategorie(req.params.id,(err, data)=> {
//         if (err) throw err;
//         res.json(data)
//     });
// };
exports.getAllContactAdmin =function (req, res) {

     const page=parseInt(req.query.page) || 1

     const limit=parseInt(req.query.limit) || 5
     const offset=(page-1)*limit;
     //nombre de ligne 
     const countQuery="select count(*) as total from contact";
     const dataQuery='select \
                contact.id,\
                contact.email,\
                contact.telephone,\
                contact.adresse,\
                contact.lien,\
                contact.image\
                from  contact \
            order by contact.id desc\
            LIMIT ? OFFSET ?'

            db.query(countQuery,(err,countResult)=>{
                if(err) return console.error("erreur:",err) 
                const total=countResult[0].total
                const totalPages=Math.ceil(total/limit)
                modelcont.getAllContact(dataQuery,[limit,offset],(err,dataResult)=>{
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
 
exports.getContacteById =function (req, res) {
    modelcont.getContactById(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json(data)
    });
};
exports.deleteContact =function (req, res) {
    modelcont.deleteContact(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json({message:'post deleted successfully'})
    });
};
exports.createContact= function(req, res) {
    const image = req.file ? req.file.filename : null;
    const {email, telephone, adresse, lien}= req.body;
    if (!req.file) {
        res.status(400).send("no file upload")
    }
     
    modelcont.createContact({email, telephone, adresse, lien, image}, (err, result)=>{
        if (err) throw err,
        res.json({message:'post created successfully'})
    });
};
// exports.updatePoste= function(req, res) {
//     const updatePoste={
//         titre:req.body.titre,
//         // image:req.body.image,
//         cat_id:req.body.cat_id
//     };
//     modelcont.updatePoste(req.params.id,updatePoste, (err, result)=>{
//         if (err) throw err,
//         res.json({message:'category updated successfully'})
//     });
// };