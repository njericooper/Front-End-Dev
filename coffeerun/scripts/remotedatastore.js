(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }

        this.serverURL = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        $.post(this.serverURL, val, function (serverResponse) {
            console.log(serverResponse);
        });
        RemoteDataStore.prototype.getAll = function () {
            //code will go here
        }
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);