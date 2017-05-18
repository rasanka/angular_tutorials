var app = angular.module("CalculatorApp", []);
app.controller("CalcCtrl", CalcCtrl);

function CalcCtrl($scope) {

    $scope.calculate = function() {
        switch ($scope.operator) {
            case "+":
                $scope.result = parseFloat($scope.text1) + parseFloat($scope.text2);
                break;
            case "-":
                $scope.result = parseFloat($scope.text1) - parseFloat($scope.text2);
                break;
            case "*":
                $scope.result = parseFloat($scope.text1) * parseFloat($scope.text2);
                break;
            case "/":
                $scope.result = parseFloat($scope.text1) / parseFloat($scope.text2);
                break;
            default:
                break;
        }
    }
}