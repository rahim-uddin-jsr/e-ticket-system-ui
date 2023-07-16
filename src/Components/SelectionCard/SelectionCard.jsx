import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import AirplanemodeActiveOutlinedIcon from "@mui/icons-material/AirplanemodeActiveOutlined";
import { Card, Grid, Stack } from "@mui/material";
import { useContext, useState } from "react";
import logo from "../../assets/logo.png";
import { DestinationContext } from "../../context/DestinationProvider/DestinationProvider";
import FlightDetails from "../FlightDetails/FlightDetails";
import "./SelectionCard.css";
const SelectionCard = ({ isHide }) => {
  const { isDac, setIsDac, isJFK, setIsJFK } = useContext(DestinationContext);
  useState(() => {
    console.log(isHide);
  }, [isHide]);
  const outlineStyle = { fill: "none", stroke: "black", strokeWidth: 0.5 };
  return (
    <Card style={{ minHeight: "280px" }}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ p: 2 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <img width={50} src={logo} alt="Logo of Biman Bangladesh Airlines" />
          <h4>Biman Bangladesh Airlines</h4>
          <p>BG117 | w & BG 178 | E</p>
          <div>
            <p>5 H 35 Min</p>
            <hr className="hr" />
            <p>2 Stoppage</p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {isDac ? (
            <>
              <h2>DAC</h2>
              <p>Hazrat Shahjalal International Airport </p>
            </>
          ) : (
            <>
              <h2>JFK</h2>
              <p>Jf kennedy int air </p>
            </>
          )}
          <p>9:05</p>
          <p>SUN 4TH JUL 2022</p>
          <div>
            <span>Refundable</span>
            <span>Class- W</span>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Stack
            direction={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <span
              className="dac-jfk"
              color="content"
              onClick={() => {
                setIsJFK(false);
                setIsDac(true);
              }}
            >
              <AirplanemodeActiveIcon
                sx={{ fontSize: 70 }}
                style={isJFK ? outlineStyle : {}}
              />
            </span>
            <span
              className="jfk-dac"
              onClick={() => {
                setIsDac(false);
                setIsJFK(true);
              }}
            >
              <AirplanemodeActiveOutlinedIcon
                sx={{ fontSize: 70 }}
                style={!isJFK ? outlineStyle : {}}
              />
            </span>
          </Stack>
          <div></div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          {!isDac ? (
            <>
              <h2>DAC</h2>
              <p>Hazrat Shahjalal International Airport </p>
            </>
          ) : (
            <>
              <h2>JFK</h2>
              <p>Jf kennedy int air </p>
            </>
          )}
          <p>12:05</p>
          <p>MON 6TH JUL 2022</p>
          <p>Baggage: 45 kg</p>
        </Grid>
      </Grid>
      {!isHide && <FlightDetails isHide={isHide} isDac={isDac} />}
    </Card>
  );
};

export default SelectionCard;
