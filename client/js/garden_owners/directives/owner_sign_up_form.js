module.exports = function(app) {
    app.directive('ownerSignUp', function() {
        return {
            restrict: 'EAC',
            require: '^ngController',
            controller: 'ownerSignUpController',
            controllerAs: '$ctrl',
            transclude: true,
            templateUrl: '/templates/garden_owners/directives/owner_sign_up_form.html',

            scope: {
                owner: '=',
                buttonText: '@',
                action: '@'
            },
            link: function(scope, element, attrs, controller) {

                var actions = {

                    create: controller.createOwner
                };
                scope.save = actions[scope.action];
            }
        };
    });
};
