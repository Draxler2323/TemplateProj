const db= require("../config/Database");

exports.getAboutAll= function(callback) {
    db.query('SELECT * FROM about', callback)
};
exports.getAbout= function(id,callback) {
    db.query('SELECT * FROM about',[id], callback)
};
exports.getAllAbout=function(data,limit,callback){
    db.query(data,limit,callback) 
}

exports.getAboutById= function(id,callback) {
    db.query('SELECT * FROM about WHERE id= ?', [id],callback)
};
exports.deleteAbout= function(id,callback) {
    db.query('DELETE FROM about WHERE id= ?', [id],callback)
};
exports.updateAbout= function(id, updateabout, callback) {
    db.query('UPDATE about SET ? WHERE id= ?', [updateabout,id],callback)
};

exports.createAbout= function(newData, callback) {
    db.query('INSERT INTO about SET ?', newData, callback)
};
  