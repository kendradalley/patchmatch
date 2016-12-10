module.exports = function(app) {
    app.directive('mainDirective', function() {
        return {
            restrict: 'EAC',
            require: '^ngController',
            controller: 'mainController',
            controllerAs: '$ctrl',
            transclude: true,
            templateUrl: '/templates/main_page/directives/main_directive.html',

            scope: {
                main: '=',
                buttonText: '@',
                action: '@'
            },
            link: function(scope, element, attrs, controller) {

            }
        };
    });
};
