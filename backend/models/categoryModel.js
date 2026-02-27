const db= require("../config/Database");

exports.getAllCategory= function(callback) {
    db.query('SELECT * FROM categorie', callback)
};
exports.getCategoryById= function(id,callback) {
    db.query('SELECT * FROM categorie WHERE id= ?', [id],callback)
};
exports.deleteCategory= function(id,callback) {
    db.query('DELETE FROM categorie WHERE id= ?', [id],callback)
};
exports.updateCategory= function(id, updatecategory, callback) {
    db.query('UPDATE categorie SET ? WHERE id= ?', [updatecategory,id],callback)
};

exports.createCategory= function(newData, callback) {
    db.query('INSERT INTO categorie SET ?', newData, callback)
};
  