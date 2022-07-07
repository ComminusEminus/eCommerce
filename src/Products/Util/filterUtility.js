const filterUtility = (filter, arr) => {
  if(filter === 'All Products'){
    return arr
  }else{
    const filteredList = arr.filter((product) =>{
      return product.tags.includes(filter)
    })
    return filteredList
  }
}

export default filterUtility;
