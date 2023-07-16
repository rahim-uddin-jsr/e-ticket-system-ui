import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Baggage from "./Components/Baggage/Baggage.jsx";
import FarePolicy from "./Components/FarePolicy/FarePolicy.jsx";
import FareSummery from "./Components/FareSummery/FareSummery.jsx";
import Details from "./Components/FlightDetails/Details.jsx";
import DestinationProvider from "./context/DestinationProvider/DestinationProvider.jsx";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#32D095", // Replace with your desired color value
    },
    secondary: {
      main: "#001252", // Replace with your desired color value
    },
    content: {
      main: "#000", // Replace with your desired color value
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Details />,
      },
      {
        path: "fare-summery",
        element: <FareSummery></FareSummery>,
      },
      {
        path: "fare-policy",
        element: <FarePolicy></FarePolicy>,
      },
      {
        path: "baggage",
        element: <Baggage></Baggage>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <DestinationProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </DestinationProvider>
    </ThemeProvider>
  </React.StrictMode>
);
