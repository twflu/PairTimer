var pairTimerApp = angular.module('PairTimer', ['ngRoute']);
pairTimerApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/sub', {
       templateUrl:"contents/sub", controller:PairTimerController
    }).otherwise('/');
}]);
