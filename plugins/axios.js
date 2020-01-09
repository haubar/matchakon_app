import axios from 'axios'

// export default axios.create({
//   baseURL: process.env.apiBaseUrl
  // baseURL: process.env.apiBaseUrl
  // headers.common['Authorization'] = 'YUOR_AUTH_TOKEN';
  // headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// })
export default {
  created() {
    axios.defaults.baseURL = process.env.apiBaseUrl
    // axios.defaults.headers.common['Authorization'] = 'YUOR_AUTH_TOKEN';
    // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
  }
}