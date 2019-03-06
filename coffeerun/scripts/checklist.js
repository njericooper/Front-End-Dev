(function (window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        if (this.$element.length === 0) {
            throw new Error('Coult not find element with selector: ' + selector);
        }
    }
    function Row(coffeeOrder){
        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox', 
            'class': 'checkbox'
        });
        var $label = $('<label></label>');
        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.email.Address
        });
        var description = coffeeOrder.size + ' ';
        if (coffeeOrder.flavor) {
            description += coffeeOrder.flavor + ' ';
        }
        description += coffeeOrder.coffee + ', ';
        description += ' (' + coffeeOrder.emailAddress + ')';
        description += ' [' + coffeeOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }
    App.CheckList = CheckList;
    window.App = App;
})(window);