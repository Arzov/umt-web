import Vuex from 'vuex'
import global from './modules/global'
import user from './modules/user'
import start from './modules/start'
import register from './modules/register'
import emailVerification from './modules/email-verification'
import recoverPassword from './modules/recover-password'

const store = () => {
  return new Vuex.Store({
    modules: {
      global,
      user,
      start,
      register,
      emailVerification,
      recoverPassword
    }
  })
}

export default store
