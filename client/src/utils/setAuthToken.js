import axios from '../utils/axiosInstance'

const setAuthToken = token => {
  if (token) {
    console.log('setAuthToken: set token')
    axios.defaults.headers.common['x-auth-token'] = token // set common header for every axios request if there's token
    localStorage.setItem('token', token)
  } else {
    console.log('setAuthToken: delete token')
    delete axios.defaults.headers.common['x-auth-token']
    localStorage.removeItem('token')
  }
}

export default setAuthToken