app.directive('dateInput', function () {
    return {
        restrict: 'A',
        scope: {
            ngModel: '='
        },
        link: function (scope) {
            if (scope.ngModel) scope.ngModel = new Date(scope.ngModel);
        }
    }
});

app.directive('showDuringResolve', function ($rootScope) {

    return {
        link: function (scope, element) {

            element.addClass('ng-hide');

            var unregister = $rootScope.$on('$routeChangeStart', function () {
                element.removeClass('ng-hide');
            });

            scope.$on('$destroy', unregister);
        }
    };
});