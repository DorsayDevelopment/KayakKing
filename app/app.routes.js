app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.view.html',
      controller: 'HomeController',

    });

  //$locationProvider.html5Mode(true);
});