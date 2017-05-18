var app = angular.module("ModulesApp", ['myModule','ngTagsInput']);

app.controller('MainCtrl', function($scope, $http) {
  $scope.tags = [
    { text: 'Tag1' },
    { text: 'Tag2' },
    { text: 'Tag3' }
  ];
});