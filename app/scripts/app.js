(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
    ]);

    app.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
                when('/', {
                    template:  '<div>' +
                                    'This is a test template for Gist' +
                               '</div>' +
                               '<script src="https://gist.github.com/jcadruvi/d8483bbab12bfd43af3e.js" type="text/javascript"></script>'
                });
        }]);
})();
