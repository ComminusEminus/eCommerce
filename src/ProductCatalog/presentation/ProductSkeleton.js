import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';



const ProductSkeleton = () => {
  let skeletonGridElements = [];
  for(let n =6; n > 0; n--){
    skeletonGridElements.push(
      <Grid key = {`loadingSkeleton-${n}`} item xs = {4}>
        <Skeleton variant="rectangular" height={500} width={300} />
      </Grid>
    )
  }
  return (
    <>
      <Grid spacing = {2} container>
        {skeletonGridElements}
      </Grid>
    </>
  )
}

export default ProductSkeleton;
