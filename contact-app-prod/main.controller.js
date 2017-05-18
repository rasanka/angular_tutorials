(function () {
    var app = angular.module("ContactApp");
    app.controller("MainCtrl", MainCtrl);

    function MainCtrl(ContactDataService) {

        var self = this;
        self.editMode = false;
        self.addMode = false;

        ContactDataService.getContacts()
            .then(function (data) {
                self.contactList = data;
            });


        this.selectContact = function (index) {
            this.selectedContact = this.contactList[index];
            this.successMessage = undefined;
            this.errorMessage = undefined;
        }

        this.toggleEditMode = function () {
            this.editMode = !this.editMode;
        }

        this.saveUser = function () {
            this.toggleEditMode();
            var userData = this.selectedContact;

            if (self.addMode) {
                ContactDataService.createUser(userData)
                    .then(function () {
                        self.successMessage = "User created successfully!";
                    }, function () {
                        self.errorMessage = "Something went wrong.. Please try again!";
                    });
                self.addMode = false;
            } else {
                ContactDataService.saveUser(userData)
                    .then(function () {
                        self.successMessage = "Data updated successfully!";
                    }, function () {
                        self.errorMessage = "Something went wrong.. Please try again!";
                    });
            }
        }

        this.addUser = function () {
            console.log('Add clicked.......');
            this.addMode = true;
            this.selectedContact = {
                "id": new Date().toTimeString()
            };
            this.editMode = true;
        }
    }
})();