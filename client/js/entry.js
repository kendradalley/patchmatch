
const angular = require('angular');
require('angular-ui-router');
require('ngmap');
var config = require('./config.js');


const pmApp = angular.module('pmApp',  ['ui.router', 'ngMap']);

require('./garden_owners')(pmApp);
require('./main_page')(pmApp);
require('./garden_list')(pmApp);

pmApp.config(($stateProvider, $urlRouterProvider)=>{
    $stateProvider
    .state('owner_sign_up_view',{
        url: '/ownersignup',
        templateUrl: 'templates/garden_owners/views/owner_sign_up_view.html',
        controller: 'ownerSignUpController',
        controllerAs: '$ctrl'
    })

    .state('index', {
        url:'/',
        controller: 'mainController',
        controllerAs: 'mainController'
    })

    .state('garden_info_view', {
        url:'/gardeninfo',
        templateUrl: 'templates/main_page/views/garden_info_view.html',
        controller: 'gardenInfoController',
        controllerAs: 'gardenInfoController'
    })

    .state('garden_list_view', {
        url: '/list',
        templateUrl: 'templates/garden_list/views/garden_list_view.html',
        controller: 'gardenListController',
        controllerAs: '$ctrl'
    });

    $urlRouterProvider.otherwise('/');
});

pmApp.controller('mainController', function(NgMap) {
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });
});
