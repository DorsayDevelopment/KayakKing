/**
 * Created by brycen on 15-03-05.
 */
app.controller('HomeController', function($scope, $location, imgDir) {

  $scope.imgDir = imgDir;

  // Initialize things
  $(document).ready(function(){
    $('.slider').slider({
      full_width: true,
      height: '60vh',
      indicators: false
    });

    $('select').material_select();
    $('select').parent().find('.caret').remove();


  });

  // Date picker
  var CurrentDate = new Date();
  var $input = $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 1,
    min: CurrentDate
  });
  var picker = $input.pickadate('picker');

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

  $scope.contactFormHidden = true;

  // Contact form visibility
  $('#toggle-contact').click(function() {
    if($scope.contactFormHidden) {
      $('#contact-form').slideDown(function() {
        $('#toggle-contact').text('Hide');
      });
      $scope.contactFormHidden = false;
    } else {
      $('#contact-form').slideUp(function() {
        $('#toggle-contact').text('Book Now');
      });
      $scope.contactFormHidden = true;
    }
  });


  $scope.form = {};
  //$scope.form.time =
  $('#form-submit')
    .click(function() {
      $scope.form.date = picker.get();
      $scope.form.time = $('#form-time').val();
      console.log($scope.form);
      $('#contact-form').slideUp(function() {
        $('#toggle-contact').fadeOut(function() {
          $('#thankyou').fadeIn();
        });
      });
    });

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