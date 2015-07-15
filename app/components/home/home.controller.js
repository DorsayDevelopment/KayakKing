/**
 * Created by brycen on 15-03-05.
 */
app.controller('HomeController', function($scope, $location) {

});

app.controller('CarouselCtrl', function ($scope) {
  $scope.interval = 8000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    slides.push({
      image: 'img/carousel/kayaksun1.jpg',
      title: 'Kayaking',
      caption: 'Go kayaking'
    });
    slides.push({
      image: 'img/carousel/kayaksun2.jpg',
      title: 'Adventuring',
      caption: 'Go adventuring'
    })
  };
  for (var i = 0; i < 2; i++) {
    $scope.addSlide();
  }
});