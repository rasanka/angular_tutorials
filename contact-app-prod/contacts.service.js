(function () {

    var app = angular.module("ContactApp");
    app.service('ContactDataService', function ($http) {
        
        var self = this;

        self.getContacts=function(){
            var promise1 = $http.get('http://localhost:3000/contacts');
            var promise2 = promise1.then(function (response) {
                    return response.data;
                });
            return promise2;
        }

        self.saveUser=function(data) {
            return $http.put('http://localhost:3000/contacts/'+data.id, data)
            .then(function(response) {
                console.log(response);
            });   
        }

        self.createUser=function(data) {
            return $http.post('http://localhost:3000/contacts', data)
            .then(function(response) {
                console.log(response);
            });   
        }

    });

})();