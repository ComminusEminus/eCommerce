const shoppingCartAtters = {
  compBox:{
    sx:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      mb: 2,
      pb:2,
      borderBottom: 1,
    }
  },
  infoBox:{
    sx:{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      width: '100%',

    }
  },
  optionsBox:{
    sx:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',

    }
  },
  itemBox:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingBottom:2
  },
  emptyCartText:{
    variant: 'h2',
    component: 'h2',
    sx:{
      fontWeight:'900'
    },
  }
}

export default shoppingCartAtters;
