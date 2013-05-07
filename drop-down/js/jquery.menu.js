define(
[
    'underscore',
    'jquery',
    'jquery-ui'
],
function(
    _,
    $
) {

    /**
     * jQuery plugin for making a dropdown menu.
     *
     * Example:
     *   $('#element').menu();
     *
     */
    $.widget('custom.menu', {
        _create : function() {
            var self = this;

            this._closeTimer = null;

            this.element
                .find('a')
                .on('mouseenter', function() {
                    self._openMenu(self, this);
                })
                .on('mouseleave', _.bind(this._closeMenu, this));
        },

        _closeMenu : function() {
            // console.log('_closeMenu', this)
            var self = this;

            this._closeTimer = setTimeout(function() {
                // console.log('timer done')
                self.element
                    .find('ul')
                    .hide();
            }, 500);
        },

        _openMenu : function(widget, element) {
            // console.log('_openMenu', element)
            clearTimeout(widget._closeTimer);

            // hide other child menu items
            $(element)
                .closest('li')
                .siblings()
                .find('> ul')
                .hide();

            // open child menu items
            $(element)
                .closest('li')
                .find('> ul')
                .show();
        }
    });

});