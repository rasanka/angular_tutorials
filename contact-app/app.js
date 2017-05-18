var app = angular.module("ContactApp", []);
app.controller("MainCtrl", MainCtrl);

app.controller("HeaderCtrl", HeaderCtrl);
app.controller("FooterCtrl", FooterCtrl);

app.value('CommentStrSvce', 'Service Intro');

// app.constant also can be used instead value
app.value('AppDataSvce', {
    'name':'ContactApp',
    'author':'Rasanka',
    version:1
});

app.value('LoggingSvce', function() {
    console.log('Testing inline function as svce');
});

// Injecting service in to factory function
function prepareAppConfig(CommentStrSvce) {
    var values = {};

    values.name = CommentStrSvce;
    values.version = 1;
    values.author = 'Rasanka';

    return values;
}

// Difference between value and factory is that 
// you can inject services in to factory
app.factory('AppDataFactory', prepareAppConfig);

function MainCtrl() {
    this.contactList = [
    {
		"gender": "female",
		"name": {
			"title": "miss",
			"first": "یلدا",
			"last": "گلشن"
		},
		"location": {
			"street": "4448 شهید صابونچی",
			"city": "زنجان",
			"state": "مرکزی",
			"postcode": 23094
		},
		"email": "یلدا.گلشن@example.com",
		"dob": "1982-04-02 04:42:10",
		"registered": "2008-01-05 03:17:40",
		"phone": "040-93004952",
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/65.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/65.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/65.jpg"
		},
		"nat": "IR"
	},
    {
		"gender": "male",
		"name": {
			"title": "mr",
			"first": "jordey",
			"last": "buijze"
		},
		"location": {
			"street": "8601 bollenhofsestraat",
			"city": "alphen aan den rijn",
			"state": "groningen",
			"postcode": 83692
		},
		"email": "jordey.buijze@example.com",
		"dob": "1980-10-09 00:51:00",
		"registered": "2003-03-28 04:33:05",
		"phone": "(570)-312-1912",
		"picture": {
			"large": "https://randomuser.me/api/portraits/men/39.jpg",
			"medium": "https://randomuser.me/api/portraits/med/men/39.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/men/39.jpg"
		},
		"nat": "NL"
	},    
    {
		"gender": "female",
		"name": {
			"title": "mrs",
			"first": "shirley",
			"last": "van der gugten"
		},
		"location": {
			"street": "1763 hoogt",
			"city": "epe",
			"state": "groningen",
			"postcode": 76560
		},
		"email": "shirley.vandergugten@example.com",
		"dob": "1977-07-31 15:32:42",
		"registered": "2002-07-08 19:13:59",
		"phone": "(945)-636-6841",
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/72.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
		},
		"nat": "NL"
	},
    {
		"gender": "female",
		"name": {
			"title": "mrs",
			"first": "carla",
			"last": "lozano"
		},
		"location": {
			"street": "5053 calle de arganzuela",
			"city": "valladolid",
			"state": "castilla y león",
			"postcode": 56363
		},
		"email": "carla.lozano@example.com",
		"dob": "1991-11-04 09:45:13",
		"registered": "2004-08-18 15:22:07",
		"phone": "951-391-867",
		"picture": {
			"large": "https://randomuser.me/api/portraits/women/34.jpg",
			"medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
			"thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
		},
		"nat": "ES"
	}
    ];

    this.selectedContact = this.contactList[1];

    this.selectContact = function(index) {
        console.log(index);
        this.selectedContact = this.contactList[index];
    }
}

// Injecting services
function HeaderCtrl(AppDataSvce, LoggingSvce,AppDataFactory) {
    this.commentStr = AppDataSvce.name;
    LoggingSvce();
    console.log(AppDataFactory.author);
}

function FooterCtrl(AppDataFactory) {
    this.commentStr = AppDataFactory.version;
}