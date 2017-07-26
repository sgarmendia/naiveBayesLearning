angular.module('bayesApp')
    .controller('predictController', function($scope, machineLearningService) {

        $scope.predict = predicttext => {
            machineLearningService.predictSentiment({ predicttext })
                .then(response => {
                    console.log(response.data)
                    $scope.prediction = response.data
                })
            $scope.predicttext = ''
            document.getElementById('sampletext').focus()
        }
    })