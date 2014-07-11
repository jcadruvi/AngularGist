(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules
        'ngRoute',           // routing
        'gist'
    ]);

    app.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
             when('/', {
                controller: 'gistController',
                template:  '<div>{{ message }}</div><gist id="7df23c23ce100e192655"></gist><script src="https://gist.github.com/jcadruvi/7df23c23ce100e192655.js" type="text/javascript"></script>'
             });
        }]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();
