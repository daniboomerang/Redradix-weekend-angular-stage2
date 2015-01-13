'use strict';

angular.module('gnasApp', [
	'ngRoute',
	// Vendor
	'ngFx',
	// GNAs Container
	'gnasDirectives',
	// GNAs Modules
	'gnaApiModule' // Rest Module
])
.config(function($locationProvider, $routeProvider) {
	$routeProvider

            // route for Module GNA Manual
            .when('/manual', { templateUrl : 'modules/manual/views/manual.html'})

            // route for Module GNA Programmed
            .when('/programmed', { templateUrl : 'modules/programmed/views/programmed.html'})

            // route for Module GNA Programmed
            .when('/directive', { templateUrl : 'modules/directive/views/directive.html'})

			// route for Module GNA Programmed
            .when('/service', { templateUrl : 'modules/service/views/service.html'})

            // route for Module GNA Api External
            .when('/api', { templateUrl : 'modules/api/views/external-api.html'})

            // Otherwise -> go to Module GNA Manual
            .otherwise({templateUrl : 'modules/manual/views/manual.html'});

    $locationProvider.html5Mode({
	  enabled: true,
	  requireBase: false
	});
})