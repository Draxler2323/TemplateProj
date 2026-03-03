const db= require("../config/Database");

exports.getAllProduct= function(callback) {
    db.query('SELECT * FROM produit order by  id desc ', callback)
};
exports.getProductById= function(id,callback) {
    db.query('SELECT * FROM produit WHERE id= ?', [id],callback)
};
exports.deleteProduct= function(id,callback) {
    db.query('DELETE FROM produit WHERE id= ?', [id],callback)
};
exports.updateProduct= function(id, updateproduct, callback) {
    db.query('UPDATE produit SET ? WHERE id= ?', [updateproduct,id],callback)
};

exports.createProduct= function(newData, callback) {
    db.query('INSERT INTO produit SET ?', newData, callback)
};
  