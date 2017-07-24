angular.module('bayesApp')
    .controller('teachController', function($scope, machineLearningService) {

        $scope.teach = (teachtext, mood) => {
            let a = teachtext.split(' ')
            console.log(a)
            machineLearningService.teachSentiment({ teachtext, mood })
                .then(response => {

                    // console.log(response)

                })

        }
    })