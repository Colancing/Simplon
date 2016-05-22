/**
 * Created by Emmanuelle on 10/05/2016.
 */
quizzApp
    .factory("Questions", function () {
        var quizObject;
        quizObject = [
            {
                id: 1,
                label: 'Où préfèreriez-vous passer vos vacances ?',
                possibilities: [
                    {
                        id: 1,
                        label: "A la mer, avec un bon bouquin",
                        categorie: "Humain",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 2,
                        label: "A la montagne, sur un VTT",
                        categorie: "Superhéros",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 3,
                        label: "Devant la playstation",
                        categorie: "Geek",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 4,
                        label: "A Eurodisney",
                        categorie: "Geek",
                        point: 1,
                        selected: "false"
                    }
                ],
                selected: null,
                result: {point: 2, categorie: "Geek"}
            },
            {
                id: 12,
                label: 'Quel est votre jeu préféré',
                possibilities: [
                    {
                        label: "Le rugby qui tâche",
                        categorie: "Superhéros",
                        point: 1,
                        selected: "false"
                    },
                    {
                        label: "Dungeon and Dragons",
                        categorie: "Geek",
                        point: 2,
                        selected: "false"
                    },
                    {
                        label: "La bataille",
                        categorie: "Humain",
                        point: 1,
                        selected: "false"
                    },
                    {
                        label: "Le scrabble",
                        categorie: "Humains",
                        point: 2,
                        selected: "false"
                    }
                ],
                selected: null,
                result: {point: 0, categorie: ""}
            },
            {
                id: 20,
                label: 'Quel est votre animal fétiche ?',
                possibilities: [
                    {
                        id: 1,
                        label: "Le requin : agressif et élégant",
                        categorie: "Superhéros",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 2,
                        label: "Le labrador : affectueux et fidèle",
                        categorie: "humain",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 3,
                        label: "Le tamagochi : logique et compact",
                        categorie: "Geek",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 4,
                        label: "La chauve-souris : impressionante et puissante",
                        categorie: "Superhéros",
                        point: 2,
                        selected: "false"
                    }
                ],
                selected: null,
                result: {point: 0, categorie: ""}
            },
            {
                id: 50,
                label: 'Python, c\'est quoi ? ',
                possibilities: [
                    {
                        id: 1,
                        label: "Un langage de programmation backend",
                        categorie: "geek",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 2,
                        label: "Un serpent super dangereux",
                        categorie: "Humain",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 3,
                        label: "Un pic rocheux",
                        categorie: "humain",
                        point: 0,
                        selected: "false"
                    },
                    {
                        id: 4,
                        label: "Un compagnon d'entraînement à l'autodéfense",
                        categorie: "Superhéros",
                        point: 1,
                        selected: "false"
                    }
                ],
                selected: null,
                result: {point: 0, categorie: ""}
            },
            {
                id: 60,
                label: 'La voiture de tes rêves ?',
                possibilities: [
                    {
                        id: 1,
                        label: "Un coupé cabriolet un peu gling gling",
                        categorie: "Superhéros",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 2,
                        label: "Une voiture électrique qui parle",
                        categorie: "Geek",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 3,
                        label: "Un break pour ranger la poussette et les poubelles",
                        categorie: "Humain",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 4,
                        label: "Pas de voiture : un vélo pour garder la forme",
                        categorie: "Superhéros",
                        point: 1,
                        selected: "false"
                    }
                ],
                selected: null,
                result: {point: 0, categorie: ""}
            },
            {
                id: 111,
                label: 'Votre plus grand exploit ?',
                possibilities: [
                    {
                        id: 1,
                        label: "Une nuit entière sur minecraft",
                        categorie: "Geek",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 2,
                        label: "Un ironman avec les pieds liés",
                        categorie: "Superhéros",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 3,
                        label: "Avoir décroché un job à fort potentiel",
                        categorie: "Humain",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 4,
                        label: "Porter un casque audio pendant 8 heures",
                        categorie: "Geek",
                        point: 1,
                        selected: "false"
                    }
                ],
                selected: null,
                result: {point: 0, categorie: ""}
            },
            {
                id: 221,
                label: 'Comment trouvez-vous ce quizz ?',
                possibilities: [
                    {
                        id: 1,
                        label: "Une bonne perte de temps",
                        categorie: "Humain",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 2,
                        label: "Il aurait été plus sympa en mandarin",
                        categorie: "Superhéros",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 3,
                        label: "Rigolo",
                        categorie: "Geek",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 4,
                        label: "Passionant",
                        categorie: "Humain",
                        point: 0,
                        selected: "false"
                    }
                ],
                selected: null,
                result: {point: 0, categorie: ""}
            },
            {
                id: 1,
                label: 'Quel sera ton prochain caprice',
                possibilities: [
                    {
                        id: 1,
                        label: "Une iWatch",
                        categorie: "Geek",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 2,
                        label: "De jolies chaussures",
                        categorie: "Humain",
                        point: 1,
                        selected: "false"
                    },
                    {
                        id: 3,
                        label: "Un banc  de muscu",
                        categorie: "Superhéros",
                        point: 2,
                        selected: "false"
                    },
                    {
                        id: 4,
                        label: "Une cape d'invisibilié",
                        categorie: "Geek",
                        point: 2,
                        selected: "false"
                    }
                ],
                selected: null,
                result: {
                    point: 0,
                    categorie: ""
                }
            },

        ];
        return quizObject;
    })

    .factory('Results', function () {
        return [
            {
                Humain: 0,
                Geek: 0,
                Superhéros: 0
            }
        ]
    });