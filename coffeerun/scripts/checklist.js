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

    CheckList.prototype.addClickHandler = function (fn) {
        this.$element.on('click', 'input', function (event) {
            
            fn(email)
                .then(function (){
                    this.removeRow(email);
                }.bind(this));
        }.bind(this));
    };

    CheckList.prototype.addRow = function (coffeeOrder) {
        //remve any existing rows that match the email address
        this.removeRow(coffeeOrder.emailAddress);
        // create a new instance of a row, using the coffee order info
        var rowElement = new Row(coffeeOrder);
        //add the new ror instance's $element property to the checklist
        this.$element.append(rowElement.$element);
    };

    CheckList.prototype.removeRow = function (email) {
        this.$element
        .find('[value="' + email + '"]')
        .closest('data-coffee-order="checkbox"]')
        .remove();
    };

    function Row(coffeeOrder) {
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