class Auth {

  static setData(key, user) {
    window.localStorage.setItem(key, JSON.stringify(user))
  }

  static getData (key) {
    const data = window.localStorage.getItem(key)
    if (data) {
      return JSON.parse(data)
    }
    return {}
  }

  static removeUser () {
    window.localStorage.removeItem('username')
  }
  static authenticateUser (token) {
    window.localStorage.setItem('token', token)
  }

  static isUserAuthenticated(){
    return window.localStorage.getItem('token')
  }

  static deauthenticateUser () {
    window.localStorage.removeItem('token')
    this.removeUser()
  }

  static getToken () {
    return window.localStorage.getItem('token')
  }
}

export default Auth