/**
 * Created by Emmanuelle on 10/05/2016.
 */


var quizzApp = angular.module("quizzApp", []);

quizzApp.controller("questionController", function ($scope, Questions) {
        $scope.questions = Questions;
        $scope.activeQuestion = 0;
        $scope.error = false;
        $scope.finalise = false;

        var numQuestionsAnswered = 0;


        $scope.setActiveQuestion = function (index) {
            if (index != undefined) {
                $scope.activeQuestion = index;
            }
            else {
                var breakOut = false;
                var length = $scope.questions.length - 1;
                while (!breakOut) {
                    if ($scope.activeQuestion < length) {
                        $scope.activeQuestion++;
                    } else {
                        $scope.activeQuestion = 0;
                        $scope.error = true;
                    }
                    if ($scope.questions[$scope.activeQuestion].selected === null) {
                        breakOut = true;
                    }
                }
            }
        };

        $scope.nextQuestion = function () {
            if ($scope.questions[$scope.activeQuestion].selected !== null) {
                numQuestionsAnswered++;
                console.log('answered', numQuestionsAnswered);
                console.log('sur/', $scope.questions.length);
                if (numQuestionsAnswered >= $scope.questions.length) {
                    for (var i = 0; i < $scope.questions.length; i++) {
                        if ($scope.questions[i].selected === null) {
                            $scope.setActiveQuestion(i);
                            return;
                        }
                    }
                    $scope.error = false;
                    $scope.finalise = true;
                    console.log('Voici les résultats !');
                    return;

                }
                else {
                    $scope.setActiveQuestion();
                }
            }
        };

        $scope.selectedPossibility = function (index) {
            $scope.questions[$scope.activeQuestion].selected = index;
        };


    }
);
