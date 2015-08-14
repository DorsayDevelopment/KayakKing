/**
 * Created by brycen on 15-03-05.
 */
app.controller('HomeController', function($scope, $location) {

  $scope.slides = [
    {
      img: 'img/carousel/kayaksun1.jpg',
      heading: 'Go Kayaking',
      caption: 'A wonderful kayaking adventure'
    }
  ];

  // Slider
  $(document).ready(function(){
    $('.slider').slider({
      full_width: true,
      height: '60vh',
      indicators: false
    });
  });

  // Links
  $scope.facebook = "http://facebook.com";

  // Map
  $scope.map = {
    center: {
      latitude: 49.2807185,
      longitude: -124.1469438
    },
    zoom: 11,
    options: {
      scrollwheel: false
    }
  };
});