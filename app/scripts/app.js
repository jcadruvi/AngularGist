(function () {
    'use strict';

    // Create the module and define its dependencies.
    var app = angular.module('app', [
        // Angular modules
        'ngRoute'           // routing
    ]);

    app.config(['$locationProvider', '$routeProvider',
        function ($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
             when('/', {
                controller: 'gistController',
                template:  '<div>{{ message }}</div> <script src="https://gist.github.com/jcadruvi/d8483bbab12bfd43af3e.js" type="text/javascript"></script>'
             });
        }]);

    // Execute bootstrapping code and any dependencies.
    app.run(['$q', '$rootScope',
        function ($q, $rootScope) {

        }]);
})();
