/**
 * Created by Emmanuelle on 10/05/2016.
 */


var quizzApp = angular.module("quizzApp", []);

quizzApp.controller("mainController", function ($scope, Questions) {
        $scope.hideChoices=false;
        $scope.questions = Questions;
        $scope.answers=[];

        $scope.givePoints = function (answer) {
                console.log(answer);
                $scope.answers.push(answer);
                //$scope.questions.answer.active=true;
                console.log("answers",$scope.answers);
                console.log("questions",$scope.questions);
                //console.log("active", $scope.questions.answer.active);

        }

        console.log('tableau', $scope.questions);
        console.log('answers', $scope.answers);
        console.log('question1', $scope.questions[1]);


    })
