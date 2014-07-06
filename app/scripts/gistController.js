(function () {
    'use strict';

    angular.module('app').controller('gistController',
        ['$scope', gistController]);

    function gistController($scope) {
        $scope.message = 'This is a test message.'
    }
})();