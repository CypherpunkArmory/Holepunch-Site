import axios from 'axios'

export const axiosRequest = (url, requestType = 'GET', data = {}) => {
  const config = {
    method: requestType,
    data: data,
    responseType: 'json',
    url: url,
  }

  return axios(config).then(response => {
    return response.data
  })
}
