/*
leEco.controller('PhoneDetailCtrl',PhoneDetailCtrl);
PhoneDetailCtrl.$inject=['initalData'];

function  PhoneDetailCtrl(initalData){


  var vm = this;
 /!*vm.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  })*!/

  console.log('initalData',initalData);

  vm.phoneDetail=initalData;
}

*/

leEco.controller('PhoneDetailCtrl',['$scope','initalData', function ($scope,initalData) {
  var vm = this;
  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });

  console.log('initalData',initalData);

  vm.phoneDetail=initalData;

}]);
