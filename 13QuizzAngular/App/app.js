/**
 * Created by Emmanuelle on 10/05/2016.
 */


var quizzApp = angular.module("quizzApp", ['chart.js']);

quizzApp.controller("questionController", function ($scope, Questions, Results) {
    $scope.questions = Questions;
    $scope.activeQuestion = 0;
    $scope.error = false;
    $scope.finalise = false;
    $scope.textResult = "";
    $scope.showResults = false;
    $scope.results = Results;
    $scope.labels = ['Humain', 'Geek', 'Superhéros'];
    $scope.data = [];

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
            if (numQuestionsAnswered >= $scope.questions.length) {
                for (var i = 0; i < $scope.questions.length; i++) {
                    if ($scope.questions[i].selected === null) {
                        $scope.setActiveQuestion(i);
                        return;
                    }
                }
                $scope.error = false;
                $scope.finalise = true;
            }
            else {
                $scope.setActiveQuestion();
            }
        }
        else {
            $scope.setActiveQuestion();
        }
    };

    $scope.selectedPossibility = function (index) {
        $scope.questions[$scope.activeQuestion].selected = index;
        $scope.questions[$scope.activeQuestion].result.point = $scope.questions[$scope.activeQuestion].possibilities[index].point;
        $scope.questions[$scope.activeQuestion].result.categorie = $scope.questions[$scope.activeQuestion].possibilities[index].categorie;
    };

    $scope.giveResults = function () {
        $scope.finalise = false;
        $scope.showResults = true;

        for (var i = 0; i < $scope.questions.length; i++) {
            var cat = $scope.questions[i].result.categorie;
            var points = $scope.questions[i].result.point;
            $scope.results[0][cat] = $scope.results[0][cat] + points;
        }
        if ($scope.results[0].Humain > $scope.results[0].Geek && $scope.results[0].Humain > $scope.results[0].Superheros) {
            $scope.textResult = $scope.results[1].Humain;
        }
        else if ($scope.results[0].Geek > $scope.results[0].Humain && $scope.results[0].Geek > $scope.results[0].Superheros) {
            $scope.textResult = $scope.results[1].Geek;

        }
        else if ($scope.results[0].Superheros > $scope.results[0].Humain && $scope.results[0].Superheros > $scope.results[0].Geek) {
            $scope.textResult = $scope.results[1].Superheros;

        }
        else $scope.textResult = $scope.textResult = $scope.results[1].Autre;
        ;
        $scope.data = [$scope.results[0].Humain, $scope.results[0].Geek, $scope.results[0].Superheros];
    };


    $scope.restart = function () {
        $scope.questions = Questions;
        $scope.activeQuestion = 0;
        $scope.error = false;
        $scope.finalise = false;
        $scope.textResult = "";
        $scope.showResults = false;
        numQuestionsAnswered = 0;
        $scope.labels = ['Humain', 'Geek', 'Superhéros'];
        $scope.data = [];
    }
});
