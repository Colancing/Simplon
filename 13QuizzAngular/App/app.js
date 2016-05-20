/**
 * Created by Emmanuelle on 10/05/2016.
 */


var quizzApp = angular.module("quizzApp", []);

quizzApp.controller("questionController", function ($scope, Questions) {
    $scope.questions = Questions;
    $scope.activeQuestion = 0;
    $scope.error = false;

    var numQuestionsAnswered = 0;


    $scope.setActiveQuestion = function (index) {
        if (index != undefined) {
            $scope.activeQuestion = index;
        }
        else {
            var breakOut = false;
            while (!breakOut) {
                $scope.activeQuestion = $scope.activeQuestion < $scope.questions.length - 1
                    ?
                    ++$scope.activeQuestion : 0;
                if ($scope.activeQuestion ===0){
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
            console.log('nombre de questions répondues passe à', numQuestionsAnswered);
            if (numQuestionsAnswered >= $scope.questions.length) {
                console.log("quiz fini, place au calcul")
            }
            else console.log('la question est selectionnée, on peut calculer la prochaine question');
        }
        $scope.setActiveQuestion();
    };

    $scope.selectedPossibility = function (index) {
        $scope.questions[$scope.activeQuestion].selected = index;

        //    passer les trois autres sur false, colorer la poss selectionnnée
    };


});
