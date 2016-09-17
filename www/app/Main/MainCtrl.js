(function () {

  'use strict';

  leEco.controller('MainCtrl',['$scope','TDCardDelegate','$timeout', function ($scope,TDCardDelegate,$timeout) {

    $scope.images=[{url:'http://img01.ibnlive.in/ibnlive/uploads/2016/01/le-eco-200116.jpg',title:'LeEco all set to enter Indian smartphone market'},
      {url:'https://www.mysmartprice.com/gear/wp-content/uploads/2016/08/LeEco-Super-TV-Prices-In-India.jpg',title:'The Big Future'},
      {url:'http://tech.firstpost.com/wp-content/uploads/2016/08/Co_-APdUMAE1E09.jpg', title:'LeEco’s Super3 EcoTVs become No.1 best-selling TV on its 1st pre-sale day'}];

    $scope.slidehasbeenClicked= function ($index) {

      console.log($index);
    }

    $scope.slideHasChanged= function ($index) {
      console.log('on change',$index)


    }

    /*console.log('CARDS CTRL');
    var cardTypes = [

      { image: 'http://static.ispyprice.com/tv_model/1996_leeco_supertv_x4_50_pro_logo.jpg' },
      { image: 'http://rtn.asia/wp-content/uploads/2016/06/LE-X55.png' },
      { image: 'http://images.indianexpress.com/2016/09/leeco-super-tv-big.jpg'}
    ];

    $scope.cards = Array.prototype.slice.call(cardTypes, 0);

    $scope.cardDestroyed = function(index) {
      if($scope.cards.length>2){$scope.cards.splice(index, 1);
      console.log('calling',$scope.cards.length)}

    };

    $scope.addCard = function() {
      var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
      newCard.id = Math.random();
      $scope.cards.push(angular.extend({}, newCard));
    }*/
    /*http://market.ionic.io/themes/pulkits-ionic-tinder-ui*/
    var cardTypes = [
      { image: 'http://static.ispyprice.com/tv_model/1996_leeco_supertv_x4_50_pro_logo.jpg' },
      { image: 'http://rtn.asia/wp-content/uploads/2016/06/LE-X55.png' },
      { image: 'http://images.indianexpress.com/2016/09/leeco-super-tv-big.jpg'}
    ];


    $scope.cards = {
      master: Array.prototype.slice.call(cardTypes, 0),
      active: Array.prototype.slice.call(cardTypes, 0),
      discards: [],
      liked: [],
      disliked: []
    }

    $scope.cardDestroyed = function(index) {
      $scope.cards.active.splice(index, 1);
    };

    $scope.addCard = function() {
      var newCard = cardTypes[0];
      $scope.cards.active.push(angular.extend({}, newCard));
    }

    $scope.refreshCards = function() {
      // Set $scope.cards to null so that directive reloads
      $scope.cards.active = null;
      $timeout(function() {
        $scope.cards.active = Array.prototype.slice.call($scope.cards.master, 0);
        $scope.$apply();
      });
    }

    $scope.$on('removeCard', function(event, element, card) {
      var discarded = $scope.cards.master.splice($scope.cards.master.indexOf(card), 1);
      $scope.cards.discards.push(discarded);
    });

    $scope.cardSwipedLeft = function(index) {
      console.log('LEFT SWIPE');
      var card = $scope.cards.active[index];
      $scope.cards.disliked.push(card);
    };
    $scope.cardSwipedRight = function(index) {
      console.log('RIGHT SWIPE');
      var card = $scope.cards.active[index];
      $scope.cards.liked.push(card);
    };

    $scope.selectedTV = function (index) {
      console.log('selected Tv',index);
    }

  }])

})();

/*MainPhonesCtrl*/

(function () {
  'use strict';
  leEco.controller('MainPhonesCtrl',['$scope','TDCardDelegate','$timeout','PhoneService', function ($scope,TDCardDelegate,$timeout,PhoneService) {


    var cardTypes = PhoneService.getPhones();


    $scope.cards = {
      master: Array.prototype.slice.call(cardTypes, 0),
      active: Array.prototype.slice.call(cardTypes, 0),
      discards: [],
      liked: [],
      disliked: []
    }

    $scope.cardDestroyed = function(index) {
      $scope.cards.active.splice(index, 1);
    };

    $scope.addCard = function() {
      var newCard = cardTypes[0];
      $scope.cards.active.push(angular.extend({}, newCard));
    }

    $scope.refreshCards = function() {
      // Set $scope.cards to null so that directive reloads
      $scope.cards.active = null;
      $timeout(function() {
        $scope.cards.active = Array.prototype.slice.call($scope.cards.master, 0);
        $scope.$apply();
      });
    }

    $scope.$on('removeCard', function(event, element, card) {
      var discarded = $scope.cards.master.splice($scope.cards.master.indexOf(card), 1);
      $scope.cards.discards.push(discarded);
    });

    $scope.cardSwipedLeft = function(index) {
      console.log('LEFT SWIPE');
      var card = $scope.cards.active[index];
      $scope.cards.disliked.push(card);
    };
    $scope.cardSwipedRight = function(index) {
      console.log('RIGHT SWIPE');
      var card = $scope.cards.active[index];
      $scope.cards.liked.push(card);
    };

    $scope.selectedTV = function (index) {
      console.log('selected Tv',index);
    }

  }])


})();

/*
MainAudioCtrl*/

(function () {
  'use strict';
  leEco.controller('MainAccessoriesCtrl',['$scope','TDCardDelegate','$timeout','CommonServices', function ($scope,TDCardDelegate,$timeout,CommonServices) {


    var cardTypes = CommonServices.getAccessories();

    $scope.cards = {
      master: Array.prototype.slice.call(cardTypes, 0),
      active: Array.prototype.slice.call(cardTypes, 0),
      discards: [],
      liked: [],
      disliked: []
    }

    $scope.cardDestroyed = function(index) {
      $scope.cards.active.splice(index, 1);
    };

    $scope.addCard = function() {
      var newCard = cardTypes[0];
      $scope.cards.active.push(angular.extend({}, newCard));
    }

    $scope.refreshCards = function() {
      // Set $scope.cards to null so that directive reloads
      $scope.cards.active = null;
      $timeout(function() {
        $scope.cards.active = Array.prototype.slice.call($scope.cards.master, 0);
        $scope.$apply();
      });
    }

    $scope.$on('removeCard', function(event, element, card) {
      var discarded = $scope.cards.master.splice($scope.cards.master.indexOf(card), 1);
      $scope.cards.discards.push(discarded);
    });

    $scope.cardSwipedLeft = function(index) {
      console.log('LEFT SWIPE');
      var card = $scope.cards.active[index];
      $scope.cards.disliked.push(card);
    };
    $scope.cardSwipedRight = function(index) {
      console.log('RIGHT SWIPE');
      var card = $scope.cards.active[index];
      $scope.cards.liked.push(card);
    };

    $scope.selectedTV = function (index) {
      console.log('selected Tv',index);
    }

  }])


})();
