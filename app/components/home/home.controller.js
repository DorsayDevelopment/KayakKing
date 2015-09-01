/**
 * Created by brycen on 15-03-05.
 */
app.controller('HomeController', function($scope, $location, imgDir) {

  $scope.imgDir = imgDir;

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

  // Nav
  $('#home-nav').click(function() {
    $('html, body').animate({
      scrollTop: $('html').offset().top
    }, 'slow', 'easeInOutQuart');
  });

  $('#location-nav').click(function() {
    $('html, body').animate({
      scrollTop: $('#location').offset().top - 50
    }, 'slow', 'easeInOutQuart');
  });

  $('#contact-nav, .caption>a').click(function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top - 50
    }, 'slow', 'easeInOutQuart');
  });
});