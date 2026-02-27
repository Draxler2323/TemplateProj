const db=require('../config/Database')
const bcrypt=require('bcrypt')

async function hashPasswd(passwrd){
    //10 ou 12
    return await bcrypt.hash(passwrd, 12)
}
exports.createUser= async function(req, res){
    const{nom, email, passwd}=req.body
    const hashpasswd=await hashPasswd(passwd.toString())
    const checkUserSql="SELECT * FROM users WHERE email = ? LIMIT 1";
    db.query(checkUserSql,[email],(err, results)=>{
        if (err){
            return status(500).json({status:'err', error:err.message});
        }
        if (results.length > 0){
            return status(200).json({exists:true, message:"user is existed"});
        }
        else{
            db.query('INSERT INTO users (nom,email,passwd) values (?,?,?)', [nom,email,hashpasswd], (err, result)=>{
                if (err) throw err
                return res.json({succes:'succes', message: 'User Created succesfully'})
            })
        }
    })
}
exports.logins= async (req,res)=>{
    const {email,passwd}=req.body

    const checkUserSql="SELECT * FROM users WHERE email = ? LIMIT 1";

    db.query(checkUserSql,[email], async (err, rows)=>{
        const passwrd=await bcrypt.compare(passwd.toString(),rows[0].passwd)
        if (err){
            return status(500).json({status:'err', error:err.message});
        }
        if (rows.length == 0){
            return status(409).json({exists:true, message:"user not found"});
        }
        else{
            
                return res.status(200).json({succes:'succes', message: 'User Created succesfully'})
            }
        
    })
}