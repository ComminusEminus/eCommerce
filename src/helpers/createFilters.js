const createFilters = (catagory, data, productPageFilters) => {
  //create set to hold tags and remove duplicates in each product object
  const tagSet = new Set();
  //loop through each products tags that includes the current
  //selected pageFilter and gather all unique refined filters
  //for all products
  data.forEach((product) => {
    if(product.tags.includes(catagory)){
        product.tags.forEach((tag) => {
          tagSet.add(tag)
        });
    };
  });
  //remove page filters from filter list
  productPageFilters.forEach((filter) => {
    tagSet.delete(filter);
  });
  //convert set to array
  const uniqueTag = [...tagSet];

  return uniqueTag
}

export default createFilters;
