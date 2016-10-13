var projectsControllers = angular.module('projectsControllers', []);

projectsControllers.controller('ReposController', ['$scope', '$http', function ($scope, $http) {

    $scope.findUserRepo = function () {
        var userName = $scope.query || 'goeuro';
        var repoUrl = 'https://api.github.com/users/' + userName + '/repos';

        //        $http.get(repoUrl).success(function (data) {
        //            $scope.repos = data;
        //            $scope.reposOrder = 'forks_count';
        //
        //            $scope.fields = [{
        //                title: 'Repository',
        //                data: 'full_name'
        //                }, {
        //                title: 'Github',
        //                data: 'html_url'
        //                }];
        //
        //
        //            $scope.sort = function (field) {
        //                $scope.sort.field = field;
        //                $scope.sort.order = !$scope.sort.order;
        //            };
        //
        //            $scope.sort.field = 'forks_count';
        //            $scope.sort.order = true;
        //        });

        $http({
            method: "GET",
            url: repoUrl
        }).then(function mySucces(response) {
            if (response.data.length == 0) {
                $scope.statusMessage = "This user doesn't have any repo !";

            } else {
                $scope.statusMessage = "";
            }
            $scope.repos = response.data;
            $scope.reposOrder = 'forks_count';

            $scope.fields = [{
                title: 'Repository',
                data: 'full_name'
                }, {
                title: 'Github',
                data: 'html_url'
                }];


            $scope.sort = function (field) {
                $scope.sort.field = field;
                $scope.sort.order = !$scope.sort.order;
            };

            $scope.sort.field = 'forks_count';
            $scope.sort.order = true;
        }, function myError(response) {
            if (response.status == 404) {
                $scope.statusMessage = "User Does not exsist !";

            } else {
                $scope.statusMessage = "Something went wrong on Github .Please try again !";

            }

        });

    }

    $scope.findUserRepo();


}]);
