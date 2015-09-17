app.controller('FooterController', function($scope, $interval) {
  $scope.testimonials = [
    {
      text: "Owner and guide Steve has been a competitive athlete and coach and found kayaking to be a great release from all life's concerns. It is also wonderful how paddling the beautiful ocean and seeing incredible beaches helps you to appreciate more of life."
    }, {
      text: "I was visiting from North Carolina and was visiting friends and stayed in a house on the ocean and went on a cruise ship but the greatest time I had in Parksville was kayaking with Steve"
    }
  ];

  $scope.item_index = 0;
  $scope.testimonial = {};
  var fadeControl = 0;
  $interval(function() {
    fadeControl = 1;
    $('.testimonial').fadeOut('slow', function() {
      if(fadeControl == 1)
        next();
      $('.testimonial').fadeIn('slow');
    });
    fadeControl = 0;
  }, 10000);

  var next = function() {
    if($scope.item_index >= $scope.testimonials.length -1) {
      $scope.item_index = 0;
    } else {
      $scope.item_index++;
    }
  };

});