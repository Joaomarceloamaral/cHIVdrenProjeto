var conexao = require('/conexao');
var e = require('../app.js');
var n = require('../app.js');

var sql = "SELECT email AND nome FROM user WHERE email = '"+e+"' AND nome = '"+n+"'";
        conexao.query(sql, function (err, result) {
                if (err){
                        throw err;
                }
                console.log(result); 
        });