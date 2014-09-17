angular.module('slideshowDirective', [])
.controller('SlideshowController', ['$scope', function($scope){
    $scope.myInterval = 5000;
    $scope.slides = [{image: '/static/graphics/Rabbit-logo.png', text: 'RabbitLOGO!'}, {image: '/static/graphics/Rabbit.png', text: 'Rabbit picture'}];
}])
.directive('slideshow', function() {
    return {
        restrict: 'E',
        scope: {
            slides: '=slides'
        },
        templateUrl: 'static/components/slideshow.html'
    };
});