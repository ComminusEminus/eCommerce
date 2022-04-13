import useEditOrderUI from '../ui-logic/useEditOrderUI'
import SelectOrderForm from '../../common/forms/SelectOrderForm';
import SelectOrderFields from '../../common/forms/SelectOrderFields';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

const ShoppingCartEditModel =(props) => {
  const {modelClose, title} = props;
  return (
    <>
      <Box sx={style}>
        <Box sx={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly', width:'100%', height:'100%', py: 2}}>
          <Typography variant = {'h5'} sx = {{mb: 3, fontWeight: 600}}>
            {title}
          </Typography>
          <SelectOrderForm orderUI = {useEditOrderUI} closeModel = {modelClose}>
            <SelectOrderFields />
          </SelectOrderForm>
        </Box>
      </Box>
    </>
  )
}

export default ShoppingCartEditModel;
