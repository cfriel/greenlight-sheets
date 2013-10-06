var name = "sheets";
var version = "1.0";

sheets = function(){};

sheets.prototype = new sheets();

sheets.prototype.metadata = function()
{
    
    return {
	description : "The sheets package provides features to view a dataset in a spreadsheet style."
    };
}();


Greenlight.Packages.Sheets = sheets.prototype;

Meteor.startup(function(){
    
    Greenlight.log("loading sheets package");
    
    Greenlight.register_package(name, version, Greenlight.Packages.Sheets);

});