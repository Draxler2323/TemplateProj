const db= require("../config/Database");

exports.getAllMateriel= function(callback) {
    db.query('SELECT * FROM materiel', callback)
};
exports.getMaterielById= function(id,callback) {
    db.query('SELECT * FROM materiel WHERE id= ?', [id],callback)
};
exports.deleteMateriel= function(id,callback) {
    db.query('DELETE FROM materiel WHERE id= ?', [id],callback)
};
exports.updateMateriel= function(id, updatemateriel, callback) {
    db.query('UPDATE materiel SET ? WHERE id= ?', [updatemateriel,id],callback)
};

exports.createMateriel= function(newData, callback) {
    db.query('INSERT INTO materiel SET ?', newData, callback)
};
  