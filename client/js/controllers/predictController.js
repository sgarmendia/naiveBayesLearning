angular.module('bayesApp')
  .controller('predictController', function($scope, machineLearningService) {

    $scope.predict = predicttext => {
      machineLearningService.predictSentiment({
          predicttext
        })
        .then(response => {

          console.log(response.data)
          $scope.prediction = response.data
          const ratioProb = Math.pow(2, response.data.odds[0][1])
          $scope.probability = +(((ratioProb / (1 + ratioProb)) * 100).toFixed(2))

        })

      $scope.predicttext = ''
      document.getElementById('sampletext').focus()

    }
  })
