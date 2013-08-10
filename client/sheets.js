Meteor.Router.add({
   
    '/sheets/:dataset': function(dataset)
    {
	Session.set("sheets_dataset", dataset);

	var dataset = Greenlight.Dataset.findOne({ name: dataset });

	if(dataset)
	{
	    Greenlight.Dataset.load(dataset);
	}

	return 'sheets_page';
    }

});