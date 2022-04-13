import composeURL from '../fetch/composeFirebaseURL';
import firebaseConfig from '../fetch/firebaseConfig';

import {useEffect, useState, useCallback} from 'react'

const useImageGrabUI = (props) => {
  const [imageURL, setImageURL] = useState(undefined);

  const setImageCallback = useCallback((url) => {
    setImageURL(url);
  }, [props])

  useEffect(() => {
    const imgURL = async () => {
      const url = await composeURL(firebaseConfig, props);
      setImageCallback(url)
    }
    imgURL()
  }, [setImageCallback])

  return {imageURL}
}

export default useImageGrabUI;
