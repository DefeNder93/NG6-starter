let AuthService = function(localStorageService, Api) {
  "ngInject";

  let login = (credentials) => {
    Api.login(credentials).then(function(r){
      localStorageService.set('authToken',r.data.token);
      console.log('login success');
    }).catch(function(){
      console.log('login error');
    });
    //console.log('username, password');
    //console.log(credentials.username, credentials.password);
    //var result = localStorageService.set('test', 'test11');
    //console.log('result ' + result);
  };

  let logout = () => {
    localStorageService.remove('authToken');
    console.log('logout');
  };

  return {
    login,
    logout
  }
};

export default AuthService;
