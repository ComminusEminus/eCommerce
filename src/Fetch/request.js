import apiClient from './apiClient'
import baseUrl from './baseUrl'
import getRequest from './getRequest'
import postRequest from './postRequest'
import composeFirebaseURL from './composeFirebaseUrl'


export default function request(type, url, data){
  var response

  if(type === 'get'){
    response = getRequest(url)
  }else if(type === 'post'){
    response = postRequest(url, data)
  }else if(type === 'firebase'){
    response = composeFirebaseURL(data)
  }
  return response
}
