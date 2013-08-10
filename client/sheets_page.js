Template.sheets_page.rendered = function() 
{
    var data = [];
    var columns = [];
    
    var options = {
	enableCellNavigation: true,
	enableColumnReorder: false,
	rowHeight: 30,
	editable: false,
	autoEdit: true,
	forceFitColumns: true
    };
    
    var grid = new Slick.Grid("#sheets-container", data, columns, options);

    grid.setData({});
    
    var database = Session.get("sheets_page_database");
    var collection = Session.get("sheets_page_collection");
    
    if(collection != undefined && database != undefined)
    {
	Meteor.call('load', database, collection, {}, 0, 100, function(loadErr, loadResult)
		    {
			Meteor.call('schema', database, collection, function(schemaErr, schemaResult)
				    {
					var schema = schemaResult;
					
					var query = { _collection : collection };
					
					var data = Data.find(query, {limit : 100}).fetch();
					
					var columns = [];
					var keys = Object.keys(schema);
					
					for(var i = 0; i < keys.length; i++)
					{
					    columns[i] = { id: keys[i], name: keys[i], field: keys[i], minWidth: 120, editor: Slick.Editors.Text, sortable: true };
					}
					
					grid = new Slick.Grid("#sheets-container", data, columns, options);

					grid.onSort.subscribe(function(e, args){ // args: sort information. 
					    var field = args.sortCol.field;
					    
					    data.sort(function(a, b){
						var result = 
						    a[field] > b[field] ? 1 :
						    a[field] < b[field] ? -1 :
						    0;
						
						return args.sortAsc ? result : -result;
					    });
					    
					    grid.invalidate();         
					});
					
					grid.setSelectionModel(new Slick.CellSelectionModel()); 
					
				    });
		    });
    }

    $('#sheets-container').height($(window).height() - 70);

    $(window).resize(function() {
	$('#sheets-container').height($(window).height() - 70);
	$(".slick-viewport").height($("#sheets-container").height() - 35);
    });
    
    
}




