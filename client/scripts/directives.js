var gnasDirectives = angular.module('gnasDirectives', []);

gnasDirectives.directive('topnavbar', function($timeout, $location, $rootScope, $route) {
  return {
    restrict: 'E',  
    scope: {},
    templateUrl: 'views/topnavbar.html',
    link: function (scope, element) {

      var previousActiveModule = undefined;
      var currentActiveModule = undefined;
      var MANUAL = 0, PROGRAMMED = 1, DIRECTIVE = 2, SERVICE = 3, API = 4;

      init();

      scope.goToModule = function(module){ $location.path(module.URLLink); }

      function init() {

        var currentModuleElementId;
        
        scope.modules = [
          {idLink: 'module-one-idLink', idText:'module-one-text', idIcon: "module-one-idIcon", URLLink: '/manual' ,text:'Manual', number:'1', animation:'fx-zoom-left'},
          {idLink: 'module-two-idLink', idText:'module-two-text', idIcon: "module-two-idIcon", URLLink: '/programmed' ,text:'Programmed', number:'2', animation:'fx-zoom-left'},
          {idLink: 'module-three-idLink', idText:'module-three-text', idIcon: "module-three-idIcon", URLLink: '/directive' ,text:'Directive', number:'3', animation:'fx-zoom-right'},
          {idLink: 'module-four-idLink', idText:'module-four-text', idIcon: "module-four-idIcon", URLLink: '/service' ,text:'Service', number:'4', animation:'fx-zoom-right'},
          {idLink: 'module-five-idLink', idText:'module-five-text', idIcon: "module-five-idIcon", URLLink: '/api' ,text:'Ext API', number:'5', animation:'fx-zoom-right'}
        ];

        $rootScope.$on("$routeChangeSuccess", function (event, current, previous, rejection) {

          function getModuleFromRoute(route) {
              var location = route.$$route.originalPath;
              if (location == scope.modules[MANUAL].URLLink) return scope.modules[MANUAL];
              if (location == scope.modules[PROGRAMMED].URLLink) return scope.modules[PROGRAMMED];
              if (location == scope.modules[DIRECTIVE].URLLink) return scope.modules[DIRECTIVE];
              if (location == scope.modules[SERVICE].URLLink) return scope.modules[SERVICE];
              if (location == scope.modules[API].URLLink) return scope.modules[API];
          }
          if (typeof(previousActiveModule) != 'undefined' || previousActiveModule != null) {
            previousActiveModule = getModuleFromRoute(previous);
          }
          currentActiveModule = getModuleFromRoute(current);
          
          if (typeof(previousActiveModule) != 'undefined' || previousActiveModule != null){
            element.find('#' + previousActiveModule.idLink).removeClass ('active');
            element.find('#' + previousActiveModule.idIcon).removeClass ('faa-pulse animated fa-lg');
          }       
          element.find('#' + currentActiveModule.idLink).addClass('active');
          element.find('#' + currentActiveModule.idIcon).addClass('faa-pulse animated fa-lg');

          previousActiveModule = currentActiveModule; 

        });  
      }
    }  
  };
});


gnasDirectives.directive('content', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/content.html'
  };
});

gnasDirectives.directive('foot', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/foot.html'
  };
});