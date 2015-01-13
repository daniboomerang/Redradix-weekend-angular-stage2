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
.config(function($locationProvider) {
    $locationProvider.html5Mode(false);
})