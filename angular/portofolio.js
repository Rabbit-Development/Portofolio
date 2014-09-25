//entry point for the application
angular.module('portofolio',[
	'ui.router',
	'ui.bootstrap',
	'ui.utils',
	'angular-inview',
]).
config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/frontpage');
/*	var html5Mode = (window.history && window.history.pushState);
	$locationProvider.html5Mode(html5Mode).hashPrefix('!');*/

	$stateProvider
		.state('frontpage', {
			url: "/frontpage",
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
}).directive('scrollOnClick', function() {
  return {
    restrict: 'A',
    link: function(scope, $elm, attrs) {
      var idToScroll = attrs.href;
      $elm.on('click', function() {
        var $target;
        if (idToScroll) {
          $target = $(idToScroll);
        } else {
          $target = $elm;
        }
        $("body").animate({scrollTop: $target.offset().top}, "slow");
      });
    }
  }
});