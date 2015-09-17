/**
 * Created by brycen on 15-03-05.
 */
app.controller('HomeController', function($scope, $location, $http, imgDir) {

  $scope.imgDir = "assets/img";

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

  $scope.mapLink = 'https://www.google.com/maps/@' +
    $scope.map.center.latitude + ',' +
    $scope.map.center.longitude + ',' +
    $scope.map.zoom + 'z';

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
      send_email();
    });

  function send_email() {
    var req = {
      data: {
        name: $scope.form.name,
        email: $scope.form.email,
        date: $scope.form.date,
        time: $scope.form.time,
        message: $scope.form.message
      },
      headers: {
        'Content-Type': 'application/json'
      }
    };

    console.log('Sending request');

    $http.post('http://localhost:9000/api/email', req).success(function(data, status, headers, config) {
      console.log(data);
    }).error(function(data, status, headers, config) {
      console.log(data);
    });
  }

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

  $('#contact-nav, .caption>a, .teaser>a, .go-to-contact').click(function() {
    if($('#contact-form').css('display') == 'none') {
      $('#toggle-contact').trigger('click');
    }
    $('html, body').animate({
      scrollTop: $('#contact-form').offset().top - 50
    }, 'slow', 'easeInOutQuart');
  });

  $('#info-nav').click(function() {
    $('html, body').animate({
      scrollTop: $('#info').offset().top
    }, 'slow', 'easeInOutQuart');
  });

  $('.nav a').on('click', function(){
    console.log('click');
    console.log('asdfasf');
    $('.navbar-toggle').click(); //bootstrap 3.x by Richard
  });

});