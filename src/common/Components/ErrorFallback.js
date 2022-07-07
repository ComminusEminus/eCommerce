import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AlertTitle from '@mui/material/AlertTitle';
import {useNavigate} from 'react-router-dom'


function ErrorFallback({error, resetErrorBoundary}) {
  const navigate = useNavigate()
  return (
    <Box sx = {{width:'100%', height:'75vh', display:'flex', justifyContent: 'center', alignItems:'center', p:4}}>
      <Alert severity="error" action={
        <Button onClick = {() => navigate('/cart')} color="inherit" size="small">
          Return To Cart
        </Button>
      } sx = {{width:'100%'}}>
        <AlertTitle>Error</AlertTitle>
        <strong>An error occurred</strong> - please return to your shopping cart and submit your shipping information again
      </Alert>
    </Box>
  )
}
export default ErrorFallback
