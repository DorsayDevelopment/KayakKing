app.config(function($routeProvider, $locationProvider, homeDir) {
  $routeProvider
    .when('/', {
      templateUrl: homeDir + '/home.view.html',
      controller: 'HomeController'
    });

  //$locationProvider.html5Mode(true);
});