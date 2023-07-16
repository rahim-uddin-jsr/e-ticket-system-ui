import { Outlet } from "react-router-dom";
import Navigation from "../SelectionCard/Navigation/Navigation";

const FlightDetails = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};

export default FlightDetails;
