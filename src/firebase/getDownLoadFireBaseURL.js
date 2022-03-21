import {ref, getDownloadURL} from 'firebase/storage';

import storage from './firebase';


const getURL = (imgPath, setState) => {
  const imageRef = ref(storage, imgPath + '.jpg');
  getDownloadURL(imageRef)
    .then((url) => {
      console.log(url)
      setState(url);

    }).catch((error) => {
      console.log(error)
    })
}


export default getURL;
