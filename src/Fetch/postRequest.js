import apiClient from './apiClient'

export default async function postRequest(url, send){
  const response = apiClient.post(`${url}`, send)
  const data = await response
  return data
}
