let ApiService = function($http) {
  "ngInject";

  const API_PATH = '/api';

  let login = (credentials) => {
    return $http.post(API_PATH + '/login', credentials)
  };

  let getHeroes = () => {
    return $http.get(API_PATH + '/heroes')
  };

  return {
    login,
    getHeroes
  }
};

export default ApiService;
