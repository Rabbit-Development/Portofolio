//entry point for the application
angular.module('portofolio',[
	'ui.router',
	'ui.bootstrap',
	'ui.utils',
	'angular-inview',
	'scrollto'
]).
config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/index');
	/*var html5Mode = (window.history && window.history.pushState);
	$locationProvider.html5Mode(html5Mode).hashPrefix('!');*/

	$stateProvider
		.state('frontpage', {
			url: '/index',
			views: {
				'banner': {
					templateUrl: "static/partials/banner.html"
				},
				'products': {
					templateUrl: "static/partials/products.html"
				},
				'projects': {
					templateUrl: "static/partials/projects.html"
				},
				'about': {
					templateUrl: "static/partials/about.html"
				},
				'contact': {
					templateUrl: "static/partials/contact.html"
				}
			}
		});
});

function ProjectsCtrl($scope, $log, $location){
	$scope.sliderInterval = 5000;
	$scope.slides = [{image:'static/graphics/Project-Frame.png', text: 'Rabbit logo!'}, {image:'static/graphics/Project-Frame.png'}];
};

function ContactCtrl($scope, $log, $location){
	
};

