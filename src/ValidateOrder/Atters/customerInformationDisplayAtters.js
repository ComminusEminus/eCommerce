const customerInformationDisplayAtters = {
  containerBox: {
    sx:{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      width: '100%',
      height:'30vh',
    }
  },

  itemBox: {
    sx:{
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',


    }
  },

  keyText: {
    variant: 'h6',
    component: 'h6',
    sx:{
      mr: 3,
      textTransform:'uppercase',
      fontWeight: 900,
    }
  },

  valueText: {
    variant: 'h6',
    component: 'h6',
  },

}

export default customerInformationDisplayAtters
