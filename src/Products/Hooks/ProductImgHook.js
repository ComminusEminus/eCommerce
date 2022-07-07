import {useEffect, useLayoutEffect, useState, useCallback} from 'react'

import composeFirebaseUrl from '../../Fetch/composeFirebaseUrl'

const useProductImgHook = (title) => {
  const [url, setUrl] = useState('')
  useLayoutEffect(() => {
    (async () => {
      const url = await composeFirebaseUrl(title)
      setUrl(url);
    })()
    return () => {
      setUrl('')
    }
  }, [title])
  return {url};

}
export default useProductImgHook
