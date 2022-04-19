import FirebaseURL from './firebaseProto';
import firebaseConfig from './firebaseConfig';

function composeFirebaseURL(config, filename){
  const newImage = new FirebaseURL(config);

  const newRef = newImage.getRef(filename);

  let url = newImage.getURL(newRef)

  return url;
}

export default composeFirebaseURL;
