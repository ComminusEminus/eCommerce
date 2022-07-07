const shoppingCartItemAtters = {
  modelTitleText:{
    variant:'h4',
    component:'h4',
    fontWeight: 900,
    my: 2,
    textTransform:'uppercase'
  },
  modelBoxAtters:{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  },
  productInfoBox:{
    sx: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height:'auto',
      px:2,
    }
  },
  actionItemsBox:{
    sx: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '15%',

    }
  },
  productTitleProps: {
    variant: 'h5',
    component: 'h5',
    sx: {

    },
  },
  productOptionProps: {
    variant: 'h5',
    component: 'h5',
    sx: {

    },
  },
  productQtyProps: {
    variant: 'h5',
    component: 'h5',
    sx: {

    },
  },
  productPriceProps: {
    variant: 'h5',
    component: 'h5',
    sx: {

    },
  },
  cancelEditButton:{
    variant: 'contained',
    sx: {
      my: 2,
    },
  },
  deleteButtonProps:{
    variant: "outlined",
    color:"error",
  },
  editButtonProps:{
    variant: 'contained',
    sx:{

    }
  },
  editBox:{
    sx:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '50%',
      backgroundColor: 'white,'
    }
  }
}


export default shoppingCartItemAtters;
