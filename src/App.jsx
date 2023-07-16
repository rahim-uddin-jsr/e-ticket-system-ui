import { Button, Card, Grid, Stack } from "@mui/material";
import { useState } from "react";
import SelectionCard from "./Components/SelectionCard/SelectionCard";
import "./app.css";
function App() {
  const [isHide, setIsHide] = useState(true);
  return (
    <div className="main-content">
      <Grid container>
        <Grid item xs={10}>
          <SelectionCard isHide={isHide} />
        </Grid>
        <Grid item xs={2}>
          <Card className="buy-now-card" style={{ minHeight: "280px" }}>
            <Stack
              direction={{ xs: "column" }}
              spacing={{ xs: 1, sm: 2 }}
              justifyContent="space-around"
              alignItems="center"
              style={{ minHeight: "280px" }}
            >
              <h2>
                <span>&#2547;</span>
                1880
              </h2>
              <Button className="book-now-btn" variant="contained">
                BOOK NOW
              </Button>{" "}
              {isHide ? (
                <Button
                  color="content"
                  onClick={() => {
                    setIsHide(false);
                  }}
                  variant="text"
                >
                  Flight Details
                </Button>
              ) : (
                <Button
                  color="content"
                  onClick={() => {
                    setIsHide(true);
                  }}
                  variant="text"
                >
                  Hide Details
                </Button>
              )}
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
