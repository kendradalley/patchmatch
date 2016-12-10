module.exports = function(app) {
    app.directive('gardenDirective', function() {
        return {
            restrict: 'EAC',
            require: '^ngController',
            controller: 'gardenListController',
            controllerAs: '$ctrl',
            transclude: true,
            templateUrl: '/templates/garden_list/directives/garden_list_directive.html',

            scope: {
                // main: '=',
                buttonText: '@',
                action: '@'
            },
            link: function(scope, element, attrs, controller) {

            }
        };
    });
};
