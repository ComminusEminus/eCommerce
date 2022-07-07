import FirebaseURL from './firebaseDataObject';
import firebaseConfig from './firebaseConfig';

export default function composeFirebaseUrl(filename){
  const newImage = new FirebaseURL(firebaseConfig);

  const newRef = newImage.getRef(filename);

  let url = newImage.getURL(newRef)

  return url;
}
