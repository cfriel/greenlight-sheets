var name = "sheets";
var version = "1.0";

Meteor.startup(function(){
    
    console.log("loading sheets package");
    
    Greenlight.register_template(name, version);

});