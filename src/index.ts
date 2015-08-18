declare var global, require, process;
global.Config = require("./config");
global.Strings = require("./strings");

try{
	require("./app").main(process.argv);
	process.exit();
} catch(e){
	console.log(e.stack);
	process.exit(1);
}