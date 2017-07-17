angular.module('twitterApp' , ['ngRoute'])

  .config( $routeProvider => {

    $routeProvider
      .when('/', {
        templateUrl: '../templates/main.html',
        controller: 'mainController'
      })

  })

