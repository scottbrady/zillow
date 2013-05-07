define(
[
    'backbone',
    'jquery',
    'jquery-menu'
],
function(
    Backbone,
    $
) {

    var MainView = Backbone.View.extend({
        initialize : function() {
            $('#cars').menu();
        }
    });

    return MainView;
});