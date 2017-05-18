var app = angular.module("SampleApp", []);
app.controller("TestCtrl1", TestCtrl1);
app.controller("TestCtrl2", TestCtrl2);
app.controller("TestCtrl3", TestCtrl3);
app.controller("TestCtrl4", TestCtrl4);

function TestCtrl3($scope) {
    $scope.testProp = "Ctrl3";
}

function TestCtrl4($scope) {
    $scope.testProp = "Ctrl4";
}

function TestCtrl1() {
    // var this = $scope
    this.testProp = "Ctrl1";
}

function TestCtrl2() {
    this.testProp = "Ctrl2";
}