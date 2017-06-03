//Angular code here. Which from youtube tutorial
var app = angular.module("musicApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/Items", {
            templateUrl: "view-list.html",
            controller: "listController"
        })
    .when("/Items/:index", {
            templateUrl: "view-detail.html",
            controller: "editController"
        })

    .otherwise({
        redirectTo: "/Items"
    });

});

app.factory("musicService", ["$rootScope", function ($rootScope) {
    var svc = {};
    var data = [
        {
            name: 'Grouplove',
            genre: 'Alternative',
            rating: "1"
        },
        {
            name: 'Grouplove',
            genre: 'Alternative',
            rating: "2"
        },
        {
            name: 'Grouplove',
            genre: 'Alternative',
            rating: "3"
        }
    ];
    
    svc.getArtists = function () {
        return data;
    };
    
    svc.getItem = function(index){
        return data[index];
    }


    return svc;

}]);



app.controller("listController", ["$scope", "$location", "$routeParams", "musicService",

                                 function ($scope, $location, $routeParams, musicService) {


        $scope.data = musicService.getArtists();

        $scope.editItem = function (x) {
            $location.path("/Items/" + x);
        }

}]);

app.controller("editController", ["$scope", "$location", "$routeParams", "musicService",

                                 function ($scope, $location, $routeParams, musicService) {
    $scope.item=musicService.getItem(parseInt($routeParams.index));
                                     

}]);