import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {FormWrapper, SelectOrderFields} from '../../common/index'

import {useSelectOrderUI} from '../index'

const SelectOrderLayout = () => {
  return (
    <Box sx = {{height: '50%', width: '100%', display:'flex', flexDirection:'column',justifyContent: 'center'}}>
      <FormWrapper orderUI = {useSelectOrderUI}>
        <SelectOrderFields />
      </FormWrapper>
    </Box>
  )
}

export default SelectOrderLayout;
