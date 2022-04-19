import { initializeApp } from "firebase/app";
import {getStorage, ref, getDownloadURL} from 'firebase/storage';

function FirebaseURL(config) {
  this.config = config;
}

FirebaseURL.prototype.initialize = function(){
  return initializeApp(this.config);
}

FirebaseURL.prototype.storage = function(){
  return getStorage(this.initialize())
}

FirebaseURL.prototype.getRef = function(filename){
  return ref(this.storage(), filename + '.jpg')
}

FirebaseURL.prototype.getURL = function(ref){
  const newURL = getDownloadURL(ref)
  return newURL;
}
FirebaseURL.prototype.returnURL = function (){
  return this.url[0];
}


export default FirebaseURL;
