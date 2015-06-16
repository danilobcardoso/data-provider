/// <reference path="../../defs/node/node.d.ts" />
/// <reference path="../../defs/mocha/mocha.d.ts" />
import HttpRequest = require("../../src/core/httpRequest");
var Assert = require("assert");

describe("HttpRequest class test", () => {
	
	var http = new HttpRequest();

    var options: any = {
        url: "http://dadosabertos.rio.rj.gov.br/apiTransporte/apresentacao/rest/index.cfm/onibus",
        headers: {
            "Accept": "*/*",
            "Cache-Control": "no-cache"
        },
        json: false
    };
	
	it("should return something asynchronously from GET request", (done) => {
		http.get("http://google.com/", (error: Error, response: any)=>{
			if(error || response){
				console.log(response.statusCode);
				Assert(true);
				done();
			}
		});
	});
	
	it("should return something synchronously from GET request", (done) => {
		try{
			var response = http.get("http://google.com/");
			Assert(response.statusCode > 0);
		} catch(e){
			Assert(e instanceof Error);
		}
		done();
	});
	
	it("should return something synchronously from GET request using options object", (done) => {
		var response = http.get(options);
		Assert(response.statusCode > 0);
		done();
	});
});