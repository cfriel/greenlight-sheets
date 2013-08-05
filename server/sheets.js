var name = "sheets";
var version = "1.0";

sheets = function(){};

sheets.prototype = new sheets();

Sheets = sheets.prototype;

Meteor.startup(function(){
    
    console.log("loading sheets package");
    
    Greenlight.register_template(name, version, Sheets);

});