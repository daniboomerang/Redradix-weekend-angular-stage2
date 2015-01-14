var gnaProgrammedControllers = angular.module('gnaProgrammedControllers', []);	

gnaProgrammedControllers.controller('gnaProgrammedCtrl', function ($scope, $interval){
    function generateRandomNumber (){return Math.floor((Math.random() * 10) + 1)}
    $scope.randomNumber;
    $scope.generateRandomNumber = function() {  
        $interval(function() {
            $scope.randomNumber = generateRandomNumber();
        }, 1000);
    };      
});