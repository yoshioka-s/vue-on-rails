import axios from 'axios'

const isProduction = process.env.NODE_ENV === 'production'
export default axios.create({
  baseURL: isProduction ? '/' : 'http://localhost:3000',
  headers: {
    Accept: 'application/json'
  }
})
