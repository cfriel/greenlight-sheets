Meteor.Router.add({
   
    '/sheets/:dataset': function(dataset)
    {
	Session.set("sheets_dataset", dataset);

	return 'sheets_page';
    }

});