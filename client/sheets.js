Meteor.Router.add({
    '/sheets*': function(path)
    {
	if(path.length == 0)
	{
	}
	else
	{
	    if(path.substring(0,1) == "/")
	    {
		path = path.substring(1, path.length);
	    }

	    var splits = path.split("/");

	    if(splits.length == 2)
	    {
		var database = splits[0];
		var collection = splits[1];

		Session.set("sheets_page_database", database);
		Session.set("sheets_page_collection", collection);
		
		return 'sheets_page';
	    }

	}
	
	return 'sheets_page';
    }

});