var irc = require("irc");
var redis = require("redis");
var string_hash = require("string-hash");
var config = require("./config.js").config;

var bot = new irc.Client(config.server, config.botName, {
	channels: config.channels,
	password: config.password
});

bot.addListener("message", function (from, to, text, message) {
	console.log(from + ": " + text);
});