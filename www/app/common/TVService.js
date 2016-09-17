leEco.factory('TVService',['$http',function ($http) {

  return {
    TVs:[{id:1,image:'http://in.img1.lemall.com/file/20160802/default/8296433712065130',tvName:"Super3 X55 4K UHD Smart TV",youTubeUrl:'https://www.youtube.com/watch?v=iQL_KbJKoYs',caption:"Designed for excellence",price:59790},
      {id:2,image:'http://in.img1.lemall.com/file/20160802/default/8290379234575482',tvName:"Super3 X65 4K UHD Smart TV",youTubeUrl:'https://www.youtube.com/watch?v=j1BmUu_FD-Q',caption:"Towards Excellence and Beyond",price:99790}],
    getLeTvs: function () {
        return this.TVs;
    }
  }

}]);
