angular.module('bayesApp')
    .factory('machineLearningService', function($http) {

        function teachSentiment(data) {

            return $http.post('/teach', data)
                .then(response => console.log(response.data))
        }

        function predictSentiment(data) {

            return $http.post('/predict', data)
                .then(response => console.log(response.data))
        }


        return {
            teachSentiment,
            predictSentiment
        }

    })