import { Grid, Stack } from "@mui/material";
import { useContext } from "react";
import logo from "../../assets/logo.png";
import { DestinationContext } from "../../context/DestinationProvider/DestinationProvider";
const Details = () => {
  const { isDac,  } = useContext(DestinationContext);
  console.log(isDac);
  return (
    <>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ p: 2 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <img width={35} src={logo} alt="Logo of Biman Bangladesh Airlines" />
          <h4>Biman Bangladesh Airlines</h4>
          <p>BG617 </p>
          <p>Operated by BG</p>
          <p>Economy G</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {isDac ? (
            <>
              <h2>DAC</h2>
            </>
          ) : (
            <>
              <h2>JFK</h2>
            </>
          )}
          <p>Dhaka, BD | 15.00 </p>
          <p>Terminal, Hazrat Shahjalal International Airport</p>
          <p>Sun, 3rd June 2022</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <span style={{ fontSize: "100px" }}>&#8640;</span>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {isDac ? (
            <>
              <h2>DXB</h2>
            </>
          ) : (
            <>
              <h2>DXB</h2>
            </>
          )}
          <p>Dhaka, BD | 15.00 </p>
          <p>Terminal, Hazrat Shahjalal International Airport</p>
          <p>Sun, 3rd June 2022</p>
        </Grid>
      </Grid>
      <hr />
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ p: 2 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <img width={35} src={logo} alt="Logo of Biman Bangladesh Airlines" />
          <h4>Biman Bangladesh Airlines</h4>
          <p>BG617 </p> <br />
          <p>Operated by BG</p>
          <p>Economy G</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {isDac ? (
            <>
              <h2>JFK</h2>
            </>
          ) : (
            <>
              <h2>DXB</h2>
            </>
          )}
          <p>Dhaka, BD | 15.00 </p>
          <p>Terminal, Hazrat Shahjalal International Airport</p>
          <p>Sun, 3rd June 2022</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <span style={{ fontSize: "100px" }}>&#8640;</span>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {isDac ? (
            <>
              <h2>DXB</h2>
            </>
          ) : (
            <>
              <h2>DAC</h2>
            </>
          )}
          <p>Dhaka, BD | 15.00 </p>
          <p>Terminal, Hazrat Shahjalal International Airport</p>
          <p>Sun, 3rd June 2022</p>
        </Grid>
      </Grid>
    </>
  );
};

export default Details;
