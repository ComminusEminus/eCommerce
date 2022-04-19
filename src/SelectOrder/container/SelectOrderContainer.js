import {useContext, useEffect, useCallback, useState} from 'react'
import PropTypes from "prop-types";
import {OrderContext, actions, SelectOrderLayout} from '../index'

/*
The select order container is main access point for the form to add a product to
the shoping cart.
*/


const SelectOrderContainer = (props) => {
  const {state: {formMaterials}, dispatch} = useContext(OrderContext);
  useEffect(() => {
    dispatch({type: actions.GET_FORM_MATERIALS, payload: props.product})
  }, [props.product])

  if(formMaterials){
    return(
      <SelectOrderLayout />
    )
  }else{
    return(
      <h1> Loading </h1>
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
