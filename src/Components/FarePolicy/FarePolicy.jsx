import { Button, Grid } from "@mui/material";
import "./FarePolicy.css";
import PolicyBox from "./PolicyBox";
const FarePolicy = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ p: 5 }}
    >
      <div className="half">
        <PolicyBox>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <p>text</p>
        </PolicyBox>
        <PolicyBox>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <p>text</p>
        </PolicyBox>
      </div>
      <div className="half">
        {" "}
        <PolicyBox>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <p>text</p>
        </PolicyBox>
        <PolicyBox>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <p>text</p>
        </PolicyBox>
      </div>
    </Grid>
  );
};

export default FarePolicy;
