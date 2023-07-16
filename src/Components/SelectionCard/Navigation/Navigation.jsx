import { Button, Grid, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
  return (
    <Grid
      style={{ width: "100%", marginBottom: "10px" }}
      container
      rowSpacing={1}
      justifyContent={"space-around"}
    >
      <Stack>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Button className="" color="secondary">
            Flight Details
          </Button>
        </NavLink>
      </Stack>
      <Stack>
        <NavLink
          to={"/fare-summery"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Button className="" color="secondary">
            Fare summery
          </Button>
        </NavLink>
      </Stack>
      <Stack>
        <NavLink
          to={"/fare-policy"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Button className="" color="secondary">
            Fare policy
          </Button>
        </NavLink>
      </Stack>
      <Stack>
        <NavLink
          to={"/baggage"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Button className="" color="secondary">
            BAGGAGE
          </Button>
        </NavLink>
      </Stack>
    </Grid>
  );
};

export default Navigation;
