angular.module('bayesApp' , ['ngRoute'])

  .config( $routeProvider => {

    $routeProvider
      .when('/', {
        templateUrl: '../templates/main.html',
        controller: 'mainController'
      })
      .when('/predict', {
        templateUrl: '../templates/predict.html',
        controller: 'mainController'
      })

  })

