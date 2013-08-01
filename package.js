Package.describe({
  summary: "Greenlight sheets site template"
});

Package.on_use(function (api, where) {
    api.use('router', ['client', 'server']);
    api.use(['templating'], 'client');
    
    api.add_files(['lib/jquery.event.drag-2.0.min.js', 'lib/jquery.event.drop-2.0.min.js', 'lib/slick.grid.css', 'lib/slick.core.js', 'lib/slick.grid.js', 'lib/slick.editors.js', 'lib/slick.cellcopymanager.js', 'lib/slick.cellrangeselector.js', 'lib/slick.cellselectionmodel.js', 'lib/slick.cellrangedecorator.js', 'lib/slick-default-theme.css'], 'client');

    api.add_files(['client/sheets_page.html', 'client/sheets_page.js', 'client/sheets_page.css'], 'client');
    api.add_files('client/sheets.js', 'client');
    api.add_files('server/sheets.js', 'server');
});

Package.on_test(function (api) {
    api.add_files('sheets_tests.js', 'client');
});
