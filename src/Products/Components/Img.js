import useProductImgHook from '../Hooks/ProductImgHook'
import productImgAtters from '../Atters/productImgAtters'
import Box from '@mui/material/Box'

const Img = ({title}) => {
  const {url} = useProductImgHook(title)
  return (
    <>
      <Box {...productImgAtters.boxProps}>
        {url && <img src = {url} alt = {`Product Image`} height={ '100%'} width={'100%'}  />}
        {!url && <h1> ...loading </h1>}
      </Box>
    </>
  )
}
export default Img
