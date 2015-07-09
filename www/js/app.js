// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app =angular.module('myMovies', ['ionic'])

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
    $http.get('http://musicbrainz.org/ws/2/release?label=47e718e1-7ee4-460c-b1cc-1192a841c6e5&offset=12&limit=2&fmt=json    ')
        .success(function(responce){
            console.log(responce);
            console.log(responce.releases) ;
            angular.forEach(responce.releases,function(child){
                console.log(child.title);
                $scope.stories.push(child);
            });
        });
});
