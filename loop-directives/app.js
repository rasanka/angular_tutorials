var app = angular.module("LoopingApp", []);
app.controller("LoopCtrl", LoopCtrl);

function LoopCtrl() {
    this.myList = [1,2,3,4,5];

    this.objList = [
        {'name':'rasa', 'age':34},
        {'name':'dil', 'age':34},
        {'name':'ranu', 'age':4},
        {'name':'dinu', 'age':3}
    ];
}