app.directive('footerDirective', function (footerDir) {
  return {
    restrict: 'E',
    templateUrl: footerDir + '/footer.view.html'
  };
});