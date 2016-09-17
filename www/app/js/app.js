// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var leEco=angular.module('starter', ['ionic','ngCordova','firebase','ionic.contrib.ui.tinderCards2','ion-affix']);
var FireDB= new Firebase('https://leeco.firebaseio.com/');


leEco.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

leEco.config(function ($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $ionicConfigProvider.backButton.previousTitleText(false);
  $ionicConfigProvider.backButton.icon('ion-arrow-left-c');
  $ionicConfigProvider.backButton.text('');
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
    .state('home',{
      url:'/home',
      abstract:true,
      templateUrl:'app/Home/home-template.html',
      controller:'HomeCtrl'
    })
    .state('home.main',{
      url:'/main',
      views:{
        "tab-main":{
          templateUrl:'app/Main/main-template.html'
        }
      }
    })
    .state('home.tvs',{
      url:'/tvs',
      views:{
        "tab-tvs":{
          templateUrl:'app/TV/tvs-template.html',
          controller:'TvCtrl',
          controllerAs:'vm',
          resolve:{
            initalTVData:['TVService', function (TVService) {
              return TVService.getLeTvs();

            }]
          }
        }
      }
    })
    .state('home.phone',{
      url:'/phone',
      views:{
        "tab-phone":{
          templateUrl:'app/Phone/phone-template.html',
          controller:'PhoneCtrl'
        }
      }
    })
    .state('home.audio',{
      url:'/audio',
      views:{
        "tab-audio":{
          templateUrl:'app/Audio/audio-template.html',
          controller:'AudioCtrl'
        }
      }
    })
    .state('home.accessories',{
      url:'/accessories',
      views:{
        "tab-accessories":{
          templateUrl:'app/Accessories/accessories-template.html',
          controller:'AccessoriesCtrl'
        }
      }
    })
    .state('home.account',{
      url:'/account',
      views:{
        "tab-account":{
          templateUrl:'app/Account/account-template.html',
          controller:'AccountCtrl'
        }
      }
    })
    .state('product',{
      url:'/product',
      abstract:true,
      templateUrl:'app/ProductDetail/product-template.html'
    })
    .state('product.phoneDetail',{
      cache:true,
      url:'/phoneDetail/:phoneId',
      views: {
        "DetailView":{
          templateUrl:'app/Phone/phoneDetail-template.html',
          controller:'PhoneDetailCtrl',
          controllerAs:'vm',
          resolve:{
            initalData:['$stateParams','PhoneService', function ($stateParams,PhoneService) {
              return PhoneService.getPhoneDetail($stateParams.phoneId);

            }]
          }
        }
      }
    });


  $urlRouterProvider.otherwise('/home/main')
});

