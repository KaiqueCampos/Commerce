var mysql = require('mysql');
var fs = require('fs')

var con = mysql.createConnection({
    host: 3306,
    user: "root",
    password: "",
    database: "mycommerce"
});

function get_info(data, callback) {
    var sql = "SELECT * from products";
    con.query(sql, function (err, results) {
        if (err) {
            throw err;
        }
        stuff_i_want = results;  // Scope is larger than function
        return callback(results);
    })
}

var stuff_i_want = '';
get_info(stuff_i_want, function (result) {
    stuff_i_want = result;

    let data = JSON.stringify(stuff_i_want);
    fs.writeFileSync('products.json', data);
});









