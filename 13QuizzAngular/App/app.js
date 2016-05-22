/**
 * Created by Emmanuelle on 10/05/2016.
 */


var quizzApp = angular.module("quizzApp", []);

quizzApp.controller("questionController", function ($scope, Questions, Results) {
        $scope.questions = Questions;
        $scope.activeQuestion = 0;
        $scope.error = false;
        $scope.finalise = false;
        $scope.textResult = "";
        $scope.showResults = false;

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
                $scope.setActiveQuestion();}
        };

        $scope.selectedPossibility = function (index) {
            $scope.questions[$scope.activeQuestion].selected = index;
            $scope.questions[$scope.activeQuestion].result.point = $scope.questions[$scope.activeQuestion].possibilities[index].point;
            $scope.questions[$scope.activeQuestion].result.categorie = $scope.questions[$scope.activeQuestion].possibilities[index].categorie;
        };

        $scope.giveResults = function () {
            $scope.results = Results;
            $scope.finalise = false;
            $scope.showResults = true;


            for (var i = 0; i < $scope.questions.length; i++) {
                var cat = $scope.questions[i].result.categorie;
                var points = $scope.questions[i].result.point;
                $scope.results[0][cat] = $scope.results[0][cat] + points;
            }
            if ($scope.results[0].Humain > $scope.results[0].Geek && $scope.results[0].Humain > $scope.results[0].Superhéros) {
                $scope.textResult = "Ni Geek, ni Superhéros, vous menez une vie bien normale à l'abris des nuits blanches et des sabres lasers";
            }
            else if ($scope.results[0].Geek > $scope.results[0].Humain && $scope.results[0].Geek > $scope.results[0].Superhéros) {
                $scope.textResult = "Vos doigts sont carrés à force de taper sur un clavier ou un joystick." +
                    "Le fait d'avoir réalisé ce quizz jusqu'au bout est la preuve la plus tangible de votre geekitude.";

            }
            else if ($scope.results[0].Superhéros > $scope.results[0].Humain && $scope.results[0].Superhéros > $scope.results[0].Geek) {
                $scope.textResult = "Demandez vite une cape et un masque pour Noël. Votre but dans la vie est de sauver des personnes sexys en détresse"+
                    "Vous êtes un superhéros !!!";
            }
            else $scope.textResult = "Un peu geek et superhéros à la fois :  Vous êtes le parfait mélange d'imagination et de rationalité";
        };

    $scope.restart = function(){
        $scope.questions = Questions;
        $scope.activeQuestion = 0;
        $scope.error = false;
        $scope.finalise = false;
        $scope.textResult = "";
        $scope.showResults = false;
        numQuestionsAnswered = 0;
    }
    }
);
