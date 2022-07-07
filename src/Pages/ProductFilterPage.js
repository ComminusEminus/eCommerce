import { useParams } from "react-router-dom";
import ProductListContainer from '../Products/Components/ProductListContainer'

import {useState, useContext, useMemo, useEffect} from 'react'


const ProductFilterPage = () => {
  const params = useParams()

  return (
    <ProductListContainer filter = {params.filter} />
  )
}

export default ProductFilterPage
