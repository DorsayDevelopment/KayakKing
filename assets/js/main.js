// Main javascript file for dom actions

$(window).scroll(function() {
  if ($(document).scrollTop() > 20) {
    $('nav').addClass('navbar-shrink');
  } else {
    $('nav').removeClass('navbar-shrink');
  }
});