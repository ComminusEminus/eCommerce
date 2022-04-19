import {ProductContext, actions} from '../index';
import {apiClient} from '../../common/index'

import { useParams } from "react-router-dom";
import {useContext, useEffect, useState} from 'react'

const useProductUI = () => {
  const params = useParams();
  const paramsKeys = Object.keys(params);
  const paramsIsEmpty = paramsKeys.length === 0;

  const [detailView, setDetailView] = useState(false)
  const [productList, setProductList] = useState({})

  const {state: {products}, dispatch} = useContext(ProductContext);



  useEffect(() => {
    apiClient.get('api/products').then((res) => {
      if(!paramsIsEmpty){
        if(paramsKeys.includes('shirtCatagory')){
          setDetailView(false)
          dispatch({type: actions.PRODUCT_FILTER, payload: res.data, filter: params});
        }else{
          setDetailView(true)
          dispatch({type: actions.FIND_PRODUCT, payload: res.data, filter: params});
        }
      }else{
        setDetailView(false)
        dispatch({type: actions.SET_PRODUCTS, payload: res.data});
      }
    }).catch(error => {
      console.log(error)
    })
  }, [params])
  return {products, detailView}
}

export default useProductUI;
