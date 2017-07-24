angular.module('bayesApp' , ['ngRoute'])

  .config( $routeProvider => {

    $routeProvider
      .when('/', {
        templateUrl: '../templates/predict.html',
        controller: 'predictController'
      })
      .when('/teach', {
        templateUrl: '../templates/teach.html',
        controller: 'teachController'
      })

  })

