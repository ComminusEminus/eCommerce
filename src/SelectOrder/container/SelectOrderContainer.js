import {SelectOrderLayout, OrderContext, actions} from '../index'

import {useContext, useEffect} from 'react'
import PropTypes from "prop-types";

const SelectOrderContainer = (props) => {
  const {state: {formMaterials}, dispatch} = useContext(OrderContext)

  useEffect(() => {
    dispatch({type: actions.GET_FORM_MATERIALS, payload: props.product})
  }, [])
  if(formMaterials){
    return (
      <>
        <SelectOrderLayout />
      </>
    )
  }else{
    return(
      <>
        <h1>...Loading</h1>
      </>
    )
  }

}

SelectOrderContainer.propTypes = {
  product: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.array.isRequired,
      price: PropTypes.number.isRequired,
      tags: PropTypes.array.isRequired,
    })
}

export default SelectOrderContainer;
