const db = require('../config/Database');
const modelabout=require('../models/aboutModel')

// exports.getPosteCategorie =function (req, res) {
//     modelabout.getPosteCategorie(req.params.id,(err, data)=> {
//         if (err) throw err;
//         res.json(data)
//     });
// };
exports.getAllAboutAdmin =function (req, res) {

     const page=parseInt(req.query.page) || 1

     const limit=parseInt(req.query.limit) || 5
     const offset=(page-1)*limit;
     //nombre de ligne 
     const countQuery="select count(*) as total from about";
     const dataQuery='select \
                about.id,\
                about.mission,\
                about.vision,\
                about.slogan,\
                about.histoire,\
                about.logo\
                from  about \
            order by about.id desc\
            LIMIT ? OFFSET ?'

            db.query(countQuery,(err,countResult)=>{
                if(err) return console.error("erreur:",err) 
                const total=countResult[0].total
                const totalPages=Math.ceil(total/limit)
                modelabout.getAllAbout(dataQuery,[limit,offset],(err,dataResult)=>{
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
 
exports.getAbouteById =function (req, res) {
    modelabout.getAboutById(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json(data)
    });
};
exports.getAbouteAll =function (req, res) {
    modelabout.getAboutAll((err, data)=> {
        if (err) throw err;
        res.json(data)
    });
};
exports.deleteAbout =function (req, res) {
    modelabout.deleteAbout(req.params.id,(err, data)=> {
        if (err) throw err;
        res.json({message:'post deleted successfully'})
    });
};
exports.createAbout= function(req, res) {
    const logo = req.file ? req.file.filename : null;
    const {mission, vision, slogan, histoire}= req.body;
    if (!req.file) {
        res.status(400).send("no file upload")
    }
     
    modelabout.createAbout({mission, vision, slogan, histoire, logo}, (err, result)=>{
        if (err) throw err,
        res.json({message:'post created successfully'})
    });
};
// exports.updatePoste= function(req, res) {
//     const updatePoste={
//         titre:req.body.titre,
//         // logo:req.body.logo,
//         cat_id:req.body.cat_id
//     };
//     modelabout.updatePoste(req.params.id,updatePoste, (err, result)=>{
//         if (err) throw err,
//         res.json({message:'category updated successfully'})
//     });
// };