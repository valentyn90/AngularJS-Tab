var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
	$routeProvider
	.when("/tab1", {
		templateUrl : "partials/tab1.html"
	})
	.when("/tab2", {
		templateUrl : "partials/tab2.html"
	})
	.when("/tab3", {
		templateUrl : "partials/tab3.html"
	});
});