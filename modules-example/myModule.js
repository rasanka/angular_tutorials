var myModule = angular.module("myModule", []);
myModule.controller("ModuleCtrl", ModuleCtrl);

function ModuleCtrl() {
    this.helloMessage = "Angular external Modules..";
}