var parsed_json = require("./pretty_dump.json");

var large_keys = [];

var num = 0;

for (var key in parsed_json) {
	// console.log(parsed_json[key].value.num > 200);
	if (parsed_json[key].value.num > 200) {
		// console.log(parsed_json[key].value.num + ": " + parsed_json[key].value.text);
		large_keys.push(parsed_json[key]);
		// num += parseInt(parsed_json[key].value.num);
	}


	// large_keys.push();

}


large_keys.sort(function (a, b) {
	return a.value.num - b.value.num;
}).reverse();

for (var object in large_keys) {
	console.log(large_keys[object].value.num + ": " + large_keys[object].value.author);
}

// console.log(num / 190010); // average