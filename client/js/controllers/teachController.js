angular.module('bayesApp')
    .controller('teachController', function($scope, machineLearningService) {

        $scope.teach = (teachtext, mood) => {    
            console.log(teachtext.split(' '))
            machineLearningService.teachSentiment({ teachtext, mood })
                .then(response => {

                    console.log(response.data)

                })
            $scope.teachtext = ''
            document.getElementById('teachingtext').focus()
        }
    })