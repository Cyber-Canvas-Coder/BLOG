import { Grid } from "@mui/material";
//components
import Banner from "../banner/Banner";
import Categories from "./Categories";
const Home = () => {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Categories />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
