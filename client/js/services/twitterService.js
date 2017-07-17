angular.module('twitterApp')
    .factory('twitterService', function($http) {

        function searchTweets(data) {

            return $http.get('/search', data)
                .then(response => response.data)
        }

        return { searchTweets }

    })
