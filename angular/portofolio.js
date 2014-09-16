//entry point for the application
var portofolio = angular.module('portofolio',[
	'ui.router',
	'ui.bootstrap',
	'ui.utils',
]);

//routing configuration for the application
portofolio.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/frontpage');
/*	var html5Mode = (window.history && window.history.pushState);
	$locationProvider.html5Mode(html5Mode).hashPrefix('!');*/

	$stateProvider
		.state('frontpage', {
			url: "/frontpage",
			templateUrl: "static/partials/frontpage/main.html",
			controller: FrontpageCtrl
		});
});