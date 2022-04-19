
import {composeFirebaseURL, firebaseConfig} from '../../common/index'

import {useEffect, useState, useCallback} from 'react'

const useImageGrabUI = (props) => {
  const [imageURL, setImageURL] = useState(undefined);

  const setImageCallback = useCallback((url) => {
    setImageURL(url);
  }, [props])

  useEffect(() => {
    const imgURL = async () => {
      const url = await composeFirebaseURL(firebaseConfig, props);
      setImageCallback(url)
    }
    imgURL()
  }, [setImageCallback])

  return {imageURL}
}

export default useImageGrabUI;
