let HttpInterceptorService = function(localStorageService, $q) {
  "ngInject";

  let request = (config) => {
    let authToken = localStorageService.get('authToken');
    if (authToken) {
      config.headers['X-AUTH-TOKEN'] = authToken;
    }
    return config;
  };

  let responseError = (rejection) => {
    return $q.reject(rejection);
  };

  return {
    request,
    responseError
  }
};

export default HttpInterceptorService;

//function ($q, bpoUserprofile, bpoAccessService, bpoGlobalState, $location) {
//  return {
//    request: function (config) {
//      if ($location.path() === '/splash' && !bpoAccessService.getKeys().authorization) {
//        $location.path('/login');
//      } else if ($location.path() !== '/login' && !bpoGlobalState.isMobileEnabled() && bpoGlobalState.isMobile() && bpoAccessService.getKeys().authorization) {
//        $location.path('/splash');
//      }
//      if (bpoAccessService.getKeys().authorization) config.headers.Authorization = bpoAccessService.getKeys().authorization;
//      return config;
//    },
//    responseError: function (rejection) {
//      if (rejection.status === 401) {
//        bpoUserprofile.logout();
//      } else {
//        return $q.reject(rejection);
//      }
//    }
//  };
//});
