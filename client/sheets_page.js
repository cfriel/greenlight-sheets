Deps.autorun(function(){
    
    var data = [];
    var columns = [];
    
    var datasetName = Session.get("sheets_dataset");

    var dataset = Greenlight.Dataset.Datasets.findOne({name: datasetName});

    if(dataset != undefined)
    {
	var schema = dataset.schema;
	
	var query = { _collection : dataset.collection };
	
	var data = Data.find(query, {limit : 100}).fetch();
	
	var columns = [];
	var keys = Object.keys(schema);
	
	for(var i = 0; i < keys.length; i++)
	{
	    columns[i] = { id: keys[i], name: keys[i], field: keys[i], minWidth: 120, editor: Slick.Editors.Text, sortable: true };
	}
	
	var grid = Greenlight.Helpers.create_slickgrid("#sheets-container", data, columns);	
    }
});

Template.sheets_page.rendered = function() 
{
    
};

Template.sheets_page.root = function()
{
    return "/sheets";
};