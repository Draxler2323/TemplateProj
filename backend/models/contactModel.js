const db= require("../config/Database");
exports.getAllContact=function(data,limit,callback){
    db.query(data,limit,callback) 
}
exports.getContact= function(id,callback) {
    db.query('SELECT * FROM contact',[id], callback)
};

exports.getContactById= function(id,callback) {
    db.query('SELECT * FROM contact WHERE id= ?', [id],callback)
};
exports.deleteContact= function(id,callback) {
    db.query('DELETE FROM contact WHERE id= ?', [id],callback)
};
exports.updateContact= function(id, updateContact, callback) {
    db.query('UPDATE contact SET ? WHERE id= ?', [updateContact,id],callback)
};

exports.createContact= function(newData, callback) {
    db.query('INSERT INTO contact SET ?', newData, callback)
};
  