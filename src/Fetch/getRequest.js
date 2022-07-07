import apiClient from './apiClient'

export default async function getRequest(url){
  let response = apiClient.get(`${url}`)
  let data = await response.data
  return data
}
