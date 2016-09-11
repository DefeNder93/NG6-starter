class HeroController {

  constructor(Api) {
    "ngInject";
    this.name = 'hero';
    this.Api = Api;
  }

  getHeroes() {
    // test auth method
    this.Api.getHeroes().then(function(r){
      console.log('get heroes success');
      console.log(r.data);
    }).catch(function(){
      console.log('get heroes error');
    })
  }
}

export default HeroController;
