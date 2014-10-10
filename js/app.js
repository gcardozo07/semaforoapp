// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('intro', {
    url: '/',
    templateUrl: 'templates/intro.html',
    controller: 'IntroCtrl'
  })
  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  });

  $urlRouterProvider.otherwise("/");

})

.controller('IntroCtrl', function($scope, $state, $ionicSlideBoxDelegate) {
 
  // Called to navigate to the main app
  $scope.startApp = function() {
    $state.go('main');
  };
  $scope.next = function() {
    $ionicSlideBoxDelegate.select( $ionicSlideBoxDelegate.next() );
  };
  $scope.previous = function() {
    $ionicSlideBoxDelegate.select( $ionicSlideBoxDelegate.previous() );
  };

  // Called each time the slide changes
  $scope.slideChanged = function(index) {
    $scope.slideIndex = index;
  };
})


.controller('marcasController',function(){
  this.marcaunid = [
  {
    id: '001',
    nombre: 'Chevrolet',
    modelo: 'Trail, Tida',
    mini: 'img/chevrolet.jpg'
  },
  {
    id: '001',
    nombre: 'Citroen',
    modelo: 'Trail, Tida',
    mini: 'img/citroen.jpg'
  },
  {
    id: '001',
    nombre: 'Dodge',
    modelo: 'Trail, Tida',
    mini: 'img/dodge.jpg'
  },
  {
    id: '001',
    nombre: 'Ford',
    modelo: 'Trail, Tida',
    mini: 'img/ford.jpg'
  },
  {
    id: '001',
    nombre: 'Honda',
    modelo: 'Trail, Tida',
    mini: 'img/honda.jpg'
  },
  {
    id: '001',
    nombre: 'Hyundai',
    modelo: 'Trail, Tida',
    mini: 'img/hyundai.jpg'
  },
  {
    id: '001',
    nombre: 'Jeep',
    modelo: 'Trail, Tida',
    mini: 'img/jeep.jpg'
  },
  {
    id: '001',
    nombre: 'Kia',
    modelo: 'Trail, Tida',
    mini: 'img/kia.jpg'
  },
  {
    id: '001',
    nombre: 'Mazda',
    modelo: 'Trail, Tida',
    mini: 'img/mazda.jpg'
  },
  {
    id: '001',
    nombre: 'Mitsubishi',
    modelo: 'Trail, Tida',
    mini: 'img/mitsubishi.jpg'
  },
  {
    id: '001',
    nombre: 'Nissan',
    modelo: 'Trail, Tida',
    mini: 'img/nissan.jpg'
  },
  {
    id: '001',
    nombre: 'Peugeot',
    modelo: 'Trail, Tida',
    mini: 'img/peugeot.jpg'
  },
  {
    id: '001',
    nombre: 'Renault',
    modelo: 'Trail, Tida',
    mini: 'img/renault.jpg'
  },
  {
    id: '001',
    nombre: 'Ssangyong',
    modelo: 'Trail, Tida',
    mini: 'img/ssangyong.jpg'
  },
  {
    id: '001',
    nombre: 'Suzuki',
    modelo: 'Trail, Tida',
    mini: 'img/suzuki.jpg'
  },
  {
    id: '001',
    nombre: 'Toyota',
    modelo: 'Trail, Tida',
    mini: 'img/toyota.jpg'
  },
  {
    id: '001',
    nombre: 'Volkswagen',
    modelo: 'Trail, Tida',
    mini: 'img/volkswagen.jpg'
  },
  {
    id: '001',
    nombre: 'Zotye',
    modelo: 'Trail, Tida',
    mini: 'img/zotye.jpg'
  }
  ];
});
