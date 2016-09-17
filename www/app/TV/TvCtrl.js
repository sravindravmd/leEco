(function () {

  'use strict';

  leEco.controller('TvCtrl',['$scope','$cordovaSocialSharing','initalTVData', function ($scope,$cordovaSocialSharing,initalTVData) {
    console.log('TV data',initalTVData);

    var vm=this;

    vm.tvsData=initalTVData;

    $scope.sharePost= function (tvData) {
      $cordovaSocialSharing
        .share(tvData.tvName,"New TV"+' '+tvData.tvName, tvData.caption, tvData.image) // Share via native share sheet
        .then(function(result) {
          // Success!

          //alert(result);
        }, function(err) {
          // An error occured. Show a message to the user
          //alert(err);
        });
    }

  }])

})();
