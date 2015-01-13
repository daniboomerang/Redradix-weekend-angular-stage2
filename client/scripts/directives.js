var gnasDirectives = angular.module('gnasDirectives', []);

gnasDirectives.directive('topnavbar', function($timeout, $document) {
  return {
    restrict: 'E',  
    scope: {},
    templateUrl: 'views/topnavbar.html',
    link: function (scope, element) {

      var previousActiveModuleLinkElementId = undefined;
      var previousActiveModuleIconElementId = undefined;
      var previousActiveModuleTextElementId = undefined;

      scope.goToModule = function(module){
        
        if (typeof(previousActiveModuleLinkElementId) != 'undefined' || previousActiveModuleLinkElementId != null){
          previousActiveModuleLinkElementId.removeClass ('active');
        }       
        previousActiveModuleLinkElementId = element.find('#' + module.idLink);
        previousActiveModuleLinkElementId.addClass('active');

        if (typeof(previousActiveModuleIconElementId) != 'undefined' || previousActiveModuleIconElementId != null){
          previousActiveModuleIconElementId.removeClass ('faa-pulse animated fa-lg');
        }       
        previousActiveModuleIconElementId = element.find('#' + module.idIcon);
        previousActiveModuleIconElementId.addClass('faa-pulse animated fa-lg');

        if (typeof(previousActiveModuleTextElementId) != 'undefined' || previousActiveModuleTextElementId != null){
          previousActiveModuleTextElementId.removeClass ('');
        }       
        previousActiveModuleTextElementId = element.find('#' + module.idText);
        previousActiveModuleTextElementId.addClass('');

      }

      init();

      function init() {
        var currentModuleElementId;
        scope.modules = [
          {idLink: 'module-one-idLink', idText:'module-one-text', idIcon: "module-one-idIcon", URLLink: '' ,text:'Modulo', number:'1', animation:'fx-zoom-left'},
          {idLink: 'module-two-idLink', idText:'module-two-text', idIcon: "module-two-idIcon", URLLink: '' ,text:'Modulo', number:'2', animation:'fx-zoom-left'},
          {idLink: 'module-three-idLink', idText:'module-three-text', idIcon: "module-three-idIcon", URLLink: '' ,text:'Modulo', number:'3', animation:'fx-zoom-right'},
          {idLink: 'module-four-idLink', idText:'module-four-text', idIcon: "module-four-idIcon", URLLink: '' ,text:'Modulo', number:'4', animation:'fx-zoom-right'},
          {idLink: 'module-five-idLink', idText:'module-five-text', idIcon: "module-five-idIcon", URLLink: '' ,text:'Modulo', number:'5', animation:'fx-zoom-right'}
        ];
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