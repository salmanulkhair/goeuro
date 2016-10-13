var myApp = angular.module('myApp', [
  'ngRoute',
  'projectsControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/repos', {
        templateUrl: 'partials/repos.html',
        controller: 'ReposController'
    }).


    otherwise({
        redirectTo: '/repos'
    });

}]);
