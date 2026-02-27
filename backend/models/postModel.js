const db= require("../config/Database");

exports.getPosteCategorie= function(id,callback) {
    db.query('select \
        categorie.cat_nom,\
        poste.titre,\
        poste.contenu,\
        poste.cat_id,\
        poste.id,\
        poste.image\
        from  categorie,poste \
    where categorie.id=poste.cat_id  AND poste.cat_id=? order by poste.id desc',  [id],callback)
};
exports.getAllPoste=function(data,limit,callback){
    db.query(data,limit,callback) 
}
exports.getPosteById= function(id,callback) {
    db.query('SELECT * FROM poste WHERE id= ?', [id],callback)
};
exports.deletePoste= function(id,callback) {
    db.query('DELETE FROM poste WHERE id= ?', [id],callback)
};
exports.updatePoste= function(id, updatePoste, callback) {
    db.query('UPDATE poste SET ? WHERE id= ?', [updatePoste,id],callback)
};

exports.createPoste= function(newData, callback) {
    db.query('INSERT INTO poste SET ?', newData, callback)
};
  