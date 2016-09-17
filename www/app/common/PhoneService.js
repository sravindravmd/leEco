leEco.factory('PhoneService',['$http','CommonServices', function ($http,CommonServices) {

  return{
    phones : [
      { id:1, image: 'http://g01.a.alicdn.com/kf/HTB1LYo1IFXXXXaeapXXq6xXFXXXb/200360373/HTB1LYo1IFXXXXaeapXXq6xXFXXXb.jpg',phoneName:'Le2 Max',description:"LeEco's proprietary mirror-surfaced technology is smart enough to recognise when you use your fingerprint for security advances and when you're using it to take a selfie. That's right. It can take selfies too.",caption:'Live the Future' },
      { id:2, image: 'http://i1-news.softpedia-static.com/images/news2/LeTV-s-Bezeless-Smartphones-Are-Here-the-First-to-Arrive-with-USB-Type-C-478335-5.jpg',phoneName:'Le2',description:"LeEco's proprietary mirror-surfaced technology is smart enough to recognise when you use your fingerprint for security advances and when you're using it to take a selfie. That's right. It can take selfies too.",caption:'Without Compromise'  },
      { id:3, image: 'http://st1.bgr.in/wp-content/uploads/2015/12/letv-1s-launched.jpg',phoneName:'Le2',description:"LeEco's proprietary mirror-surfaced technology is smart enough to recognise when you use your fingerprint for security advances and when you're using it to take a selfie. That's right. It can take selfies too.",caption:'Without Compromise' },
      { id:4, image: 'http://g03.a.alicdn.com/kf/HTB1uShfIVXXXXaVaXXXq6xXFXXXk/200360373/HTB1uShfIVXXXXaVaXXXq6xXFXXXk.jpg',phoneName:'Le2 Max',description:"LeEco's proprietary mirror-surfaced technology is smart enough to recognise when you use your fingerprint for security advances and when you're using it to take a selfie. That's right. It can take selfies too.",caption:'Without Compromise' }],


  getPhones : function () {
      return this.phones;
    },

    getPhoneDetail : function (id) {
     var detail= _.find(this.phones, function (o) {
        return o.id==id;
      });
      console.log('Calling Detail',detail)

      return detail;
    }
  }
}])
