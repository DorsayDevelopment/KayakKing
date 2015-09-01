app.directive('headerDirective', function (headerDir) {
  return {
    restrict: 'E',
    templateUrl: headerDir + '/header.view.html'
  };
});