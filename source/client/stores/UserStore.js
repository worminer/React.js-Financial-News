import alt from '../alt'
import UserActions from '../actions/UserActions'
import Auth from '../components/user/Auth'

class AppStore {
  constructor () {
    this.bindActions(UserActions)
    this.loggedInUserId = ''
    this.username = ''
    this.roles = []
    this.on('beforeEach', (data) => {
      if (Auth.isUserAuthenticated() && !this.loggedInUserId) {
        //maybe serialize
        this.loggedInUserId = Auth.getToken()
        this.username = Auth.getData('username');
        this.roles = Auth.getData('roles')
        this.emitChange();
      }

    });
  }

  onLoginUserSuccess (user) {

    this.loggedInUserId = user._id
    this.username = user.username
    this.roles = user.roles
    Auth.setData('username', this.username);
    Auth.setData('roles', this.roles);
    Auth.authenticateUser(this.loggedInUserId)

  }

  onLoginUserFail () {
    console.log('Failed login attempt')
  }

  onLogoutUserSuccess () { // Redirect on part 3
    this.loggedInUserId = ''
    this.username = ''
    this.roles = []
    Auth.deauthenticateUser()
  }
}

export default alt.createStore(AppStore)