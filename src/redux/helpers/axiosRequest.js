import axios from 'axios'

export const axiosRequest = (url, requestType = 'GET', data = {}, headers = {}) => {
  const config = {
    method: requestType,
    data: data,
    responseType: 'json',
    url: url,
    headers: headers
  }
  
  return axios(config).then(response => {
    return response.data
  })
}
