var app = angular.module("TodoApp", []);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
    this.editMode = false;
    this.todos = [
        "Learn Angular",
        "Watch JavaBrains"
    ];

    this.addToDo = function() {
        this.todos.push(this.todoText);
        this.todoText = "";
    }
    
    this.triggerEditMode = function() {
        this.editMode = !this.editMode;
    }

    this.deleteTodo = function(index) {
        this.todos.splice(index,1);
    }
}