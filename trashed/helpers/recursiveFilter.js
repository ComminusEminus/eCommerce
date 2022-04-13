const recursiveFilter = (data, arrayFilters, index = 0) => {
  if(arrayFilters.length == 0){
    return data
  }
  if (index === arrayFilters.length - 1) {
    return data.filter((product) => product.tags.includes(arrayFilters[index]))
  }
  return recursiveFilter(data.filter((product) => product.tags.includes(arrayFilters[index])), arrayFilters, index + 1)
}


export default recursiveFilter;
