const shoppingCartDisplayAtters = {
  containerProps: {
    sx:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width:'100%',
      height: '30vh'
    }
  },
  buttonBox:{
    sx:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width:'100%',
      height: 'auto'
    }
  },
  editCartButton:{
    type: 'submit',
    variant: 'contained'
  }
}
export default shoppingCartDisplayAtters;
