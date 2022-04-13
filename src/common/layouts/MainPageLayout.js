import Grid from '@mui/material/Grid'
import {Outlet} from "react-router-dom";
import Container from '@mui/material/Container'

const MainPageLayout = ({children}) => {
  return (
    <>
      <Grid container>
        <Grid item xs = {12}>
          {children}
        </Grid>
        <Grid item xs = {12}>
          <Container maxWidth = 'xl' disableGutters>
            <Outlet />
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default MainPageLayout;
