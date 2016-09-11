
class LoginController {

  constructor(Auth) {
    "ngInject";

    this.auth = Auth;
    this.credentials = {
      username: '',
      password: ''
    }
  }

  login() {
    this.auth.login(this.credentials);
  }

  logout() {
    this.auth.logout();
  }
}

export default LoginController;
