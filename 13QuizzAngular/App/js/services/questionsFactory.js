/**
 * Created by Emmanuelle on 10/05/2016.
 */
myApp.factory("Questions", function(){
        return [{
            label:'Quel est le rapport entre Java et JavaScript ?',
            responses :[
                {
                    id: 1,
                    label: "C'est le même langage, mais le nom  JavaScript  est utilisé pour le code s'exécutant dans une page Web",
                    categorie: "Javascript",
                    point: 0
                },
                {
                    id: 2,
                    label: "Ce sont deux langages différents, malgré quelques points communs dans la syntaxe",
                    categorie: "Javascript",
                    point: 1
                },
                {
                    id: 3,
                    label: "Java est une version améliorée de JavaScript",
                    categorie: "Javascript",
                    point: 0
                },
                {
                    id: 4,
                    label: "Java est une île, ça n'a rien à voir !",
                    categorie: "Javascript",
                    point: 0
                }

            ]

        },
        {
            label:'Laquelle de ces syntaxes est correcte ?',
            responses :[
                {
                    label: "if (a != 2) {}",
                    categorie: "Javascript",
                    point: 1
                },
                {
                    label: "if a != 2 {}",
                    categorie: "Javascript",
                    point: 0
                },
                {
                    label: "if (a <> 2) {}",
                    categorie: "Javascript",
                    point: 0
                },
                {
                    label: "if a <> 2 {}",
                    categorie: "Javascript",
                    point: 0
                }
            ]
        }
    ];
});