var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "users"
});

con.connect(function(err) {

//if (err) throw err;
function insert(){
console.log("Connected!");

var sql_q = "INSERT INTO users (name) VALUES ("/.usr./")";

con.query(sql_q, function (err,result) {
	console.log("Inserted");
})
};

module.exports = {
	inserter : insert();
}

});