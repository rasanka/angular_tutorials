var app = angular.module("ngModelExample", []);
app.controller("ExampleCtrl", ExampleCtrl);

function ExampleCtrl($scope) {
    $scope.textBoxChange = function() {
        console.log("changing");
    }
}