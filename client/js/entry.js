
const angular = require('angular');
require('angular-ui-router');


const pmApp = angular.module('pmApp',  ['ui.router']);

require('./garden_owners')(pmApp);
require('./main_page')(pmApp);

pmApp.config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
    .state('owner_sign_up_view',{
        url: '/ownersignup',
        templateUrl: 'templates/garden_owners/views/owner_sign_up_view.html',
        controller: 'ownerSignUpController',
        controllerAs: '$ctrl'
    })

    .state('main_view', {
        url:'/',
        templateUrl: 'templates/main_page/views/main_view.html',
        controller: 'mainController',
        controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
});
