angular.module('bayesApp')
    .controller('predictController', function($scope, machineLearningService) {

        $scope.predict = predicttext => {
            let a = predicttext.split(' ')
            console.log(a)
            machineLearningService.predictSentiment({ predicttext })
                .then(response => {

                    // console.log(response)

                })

        }
    })