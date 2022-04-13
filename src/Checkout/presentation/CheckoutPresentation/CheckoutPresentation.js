import { useParams } from "react-router-dom";
import {useContext, useEffect} from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {FormWrapper, CheckoutFormFields} from '../../../common/index'
import {useCheckoutUI} from '../../index'
const CheckoutPresentation = () => {
  return (
    <>
      <Paper elevation = {5} sx = {{borderRadius: 8, my: 3, py:4, display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'stretch'}}>
        <FormWrapper orderUI = {useCheckoutUI}>
          <CheckoutFormFields />
        </FormWrapper>
      </Paper>
    </>
  )
}

export default CheckoutPresentation;
