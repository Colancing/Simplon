/**
 * Created by Emmanuelle on 10/05/2016.
 */
quizzApp
    .factory("Questions", function () {
        var quizObject = [
            {
                label: 'Quel est le rapport entre Java et JavaScript ?',
                possibilities: [
                    {
                        id: 1,
                        label: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web",
                        categorie: "Javascript",
                        point: 0,
                        active: "true"
                    },
                    {
                        id: 2,
                        label: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe",
                        categorie: "Javascript",
                        point: 1,
                        active: "true"
                    },
                    {
                        id: 3,
                        label: "Java est une version améliorée de JavaScript",
                        categorie: "Javascript",
                        point: 0,
                        active: "true"
                    },
                    {
                        id: 4,
                        label: "Java est une île, ça n'a rien à voir !",
                        categorie: "Javascript",
                        point: 0,
                        active: "true"
                    }
                ],
                selected: null,
                correct: null
            },
            {
                label: 'Laquelle de ces syntaxes est correcte ?',
                possibilities: [
                    {
                        label: "if (a != 2) {}",
                        categorie: "Javascript",
                        point: 1,
                        active: "true"
                    },
                    {
                        label: "if a != 2 {}",
                        categorie: "Javascript",
                        point: 0,
                        active: "true"
                    },
                    {
                        label: "if (a <> 2) {}",
                        categorie: "Javascript",
                        point: 0,
                        active: "true"
                    },
                    {
                        label: "if a <> 2 {}",
                        categorie: "Javascript",
                        point: 0,
                        active: "true"
                    }
                ],
                selected: null,
                correct: null
            }];
        return quizObject;
    });