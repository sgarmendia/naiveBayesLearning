angular.module('bayesApp')
    .factory('machineLearningService', function($http) {

        function teachSentiment(data) {

            return $http.post('/teach', data)
               
        }

        function predictSentiment(data) {

            return $http.post('/predict', data)
                
        }

        return {
            teachSentiment,
            predictSentiment
        }

    })