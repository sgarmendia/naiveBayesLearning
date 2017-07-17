angular.module('bayesApp')
    .controller('mainController', function($scope, machineLearningService) {

        $scope.teach = (teachtext, mood) => {

            machineLearningService.teachSentiment({ teachtext, mood })
                .then(response => {

                    // console.log(response)

                })

        }
    })