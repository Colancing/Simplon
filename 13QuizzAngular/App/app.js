/**
 * Created by Emmanuelle on 10/05/2016.
 */
var myApp = angular.module("myApp", []);

myApp.controller("mainController", function($scope, Questions){

$scope.questions = Questions;
    console.log ('question', $scope.questions);

})