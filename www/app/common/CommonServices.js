leEco.factory('CommonServices',['$http', function ($http) {

  return{

    getAccessories : function () {

     var cardTypes = [

        { image: 'http://cdn.gsmarena.com/imgroot/news/16/04/leeco-cdla/-728/gsmarena_002.jpg' },
        { image: 'https://1.bp.blogspot.com/-PwrYshe56oI/Vyr5RdbmSpI/AAAAAAAAAmU/QT6zy3x-L0oXcMwdB1-MKc2YPYQfVweMQCLcB/s1600/LEME%2BBluetooth%2Bheadset.JPG' },
        { image: 'http://g02.a.alicdn.com/kf/HTB1YT3NJFXXXXX1XpXXq6xXFXXX7/Original-LETV-Portable-Bluetooth-Wireless-Stereo-Speaker-Outdoor-Sport-Mp3-Player-Super-Bass-For-Smartphone.jpg'},
        { image: 'http://img01.cp.aliimg.com/bao/uploaded/i2/1757650601/TB2rkHbXVXXXXa1XpXXXXXXXXXX_!!1757650601.png'}
      ];

      return cardTypes;
    }
  }
}])
