/**
 * Created by brycen on 15-03-05.
 */
app.controller('HomeController', function($scope, $location) {




});

app.controller('CarouselCtrl', function ($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 800 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/800',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
      ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }
});