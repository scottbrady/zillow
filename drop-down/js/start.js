requirejs.config({
    // define aliases for requiring modules
    paths : {
        'backbone'    : 'vendor/backbone',
        'jquery'      : 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min',
        'jquery-ui'   : 'http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.2/jquery-ui',
        'jquery-menu' : 'jquery.menu',
        'underscore'  : 'vendor/underscore'
    },
    shim  : {
        'backbone'   : {
            deps    : [
                'underscore',
                'jquery'
            ],
            exports : 'Backbone'
        },
        'jquery' : {
            exports : '$'
        },
        'jquery-ui' : {
            deps : [ 'jquery' ]
        },
        'underscore' : {
            exports : '_'
        }
    }
});

requirejs(
[
    'view/mainview'
],
function(
    MainView
) {
    // instantiate the main view
    var mainView = new MainView();
});