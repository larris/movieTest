// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =angular.module('myMovies', ['ngCordova','ionic'])

 app.run(function($ionicPlatform) {
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
});

app.controller('moviesCtrl',function($http,$scope){
    $scope.stories = [];
    $http.get('http://www.omdbapi.com/?t=the+last+ship&y=&plot=short&r=json')
        .success(function(responce){
            console.log('2' + responce.Title);
            console.log('3' +responce) ;
            $scope.stories.push(responce);

        });

});
