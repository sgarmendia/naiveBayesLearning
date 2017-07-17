angular.module('bayesApp')
    .factory('machineLearningService', function($http) {

        function teachSentiment(data) {

            return $http.post('/teach', data)
                .then(response => response.data)
        }

        return { teachSentiment }

    })
