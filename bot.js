console.log("Script starting");

var irc = require("irc");
var redis = require("redis");
var hash = require("string-hash");
var config = require("./config.js").config;

var client = redis.createClient();

var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels,
	password: config.password
});

var time_start = new Date();
var count = 0;


bot.addListener("message", function (from, to, text, message) {
	console.log("Processing message \"" + text + "\" from " + from);
	var hash_key = hash(text);
	client.get(hash_key, function(err, reply){
		if(reply === null){
			client.hset(hash_key, "text", text);
			client.hset(hash_key, "num", 1);
			client.hset(hash_key, "author", from);
		} else {
			client.hincrby(hash_key, "num", 1);
		}
	});

});


client.addListener("error", function(vars){
	console.log(vars);
}); //Do nothing on redis error

bot.addListener("error", function(vars){
	console.log(vars);
}); //Do nothing on error. It still connects properly but twitch has a weird command.