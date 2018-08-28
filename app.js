var tmi = require('tmi.js');

//const myInsert = require(',/db_connection');
//let val = myInsert.inserter();

var usr = [];
var din_arr = [];

const channel = "Gufeean";

var options = {
	options: {
		debug: true
	},
	connection: {
		cluster: "aws",
		reconnect: true
	},
	identity: {
		username: "ben_max",
		password: "oauth:mz2qw8n3gblumg3uyv4xbf7thpead2"
	},
	channels: [channel]
};

var client = new tmi.client(options);
client.connect();

client.on('connected', function(address, port){
	console.log("Address: "+ address + " Port: " + port);
});

client.on("message", function(channel, userstate, message, self) {
	if(message === "!holesik") {
		if(self)return;setTimeout(function(){
			client.say(channel, "Mi hol esik: https://bit.ly/2nnJpIy");
		}, 1000);
	};
	if(message === "!hulyekerdes") {
		if(self)return;setTimeout(function(){
			client.say(channel, "Hülye kérdés nincs, csak hülye válasz.");
		}, 1000);
	};
	if(message === "!csatlakozas") {
		if(self)return;setTimeout(function(){
		client.say(channel, "Csatlakozni akkor lehet, ha van hely, meg van a követelményed az adott mission-höz, és vagy Gufeean azt mondja hogy lehet csatlakozni.");
		}, 1000);
	};
	if(message === "!mikorlesz") {
		if(self)return;setTimeout(function(){
			client.say(channel, "Amint Gufeean úgy dönt, hogy azzal szeretne játszani.");
		}, 1000); 
	};
	if(message === "!koszon") {
		if(self)return;setTimeout(function(){
			client.say(channel, "Szia VoHiYo");
		}, 1000); 
	};
});


client.on('connected', function(address, port){
	//client.say(channel, "Heyho boiiis KonCha  ");
});

// Itt kap egy triggert->
client.on('chat', function(channel, user, message, self) {
// User kizárás
		if(self)return;
		if(user['display-name']=="ben_max")return;
		if(user['display-name']=="ben_max_bot")return;
		if(user['display-name']=="Moobot")return;
		if(user['display-name']=="Nightbot")return;
// Volt-e már?
		if(!(usr.includes(user['display-name'])))
		{
			usr.push(user['display-name']);
			din_arr.push(user['display-name']);
			console.log(din_arr);
		};

// Tömb normlizáció
		//din_arr = din_arr.filter(function(e){return e}); 
		din_arr.toString();
		console.log(din_arr);

// Ha nem üres akkor írja ki
		console.log(!(din_arr.length === 0));
		if(!(din_arr.length === 0))
		{
			// 6 sec várás
			setTimeout(function(){
				console.log(din_arr);
				if(!(din_arr.length === 0))
				{
					client.say(channel,"Hali " + din_arr + " KonCha  ");
					din_arr = [];
				};
			},12000);
		};

});
