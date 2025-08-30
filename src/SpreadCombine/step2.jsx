import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./SpreadCombine.scss";
import BottomNavigationActionsButtons from "./bottomNavigationActionsButtons";

export default function Step2() {
  const [os, setAlignment] = useState("win");
  const [sixtyPercentOfWindow, setSixtyPercentOfWindow] = useState(
    window.innerWidth * 0.6
  ); // get

  useEffect(() => {
    function updateWidth() {
      // update the width
      setSixtyPercentOfWindow(window.innerWidth * 0.6);
    }

    // Add event listener
    window.addEventListener("resize", updateWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []); // The empty array [] ensures this effect runs only once on mount

  const handleOs = (event, newOs) => {
    setAlignment(newOs);
  };

  function openLink(link) {
    window.open(link, "_blank", "noopener,noreferrer");
  }

  function GetGitDownloadButton() {
    if (os === "win")
      return (
        <Button
          variant="contained"
          onClick={() => openLink("https://git-scm.com/download/win")}
        >
          Download Git for Windows
        </Button>
      );

    if (os === "linux")
      return (
        <Button
          variant="contained"
          onClick={() => openLink("https://git-scm.com/download/linux")}
        >
          Download Git for Linux
        </Button>
      );

    if (os === "mac")
      return (
        <Button
          variant="contained"
          onClick={() => openLink("https://git-scm.com/download/mac")}
        >
          Download Git for MacOS
        </Button>
      );

    return <Typography variant="h4">OS Not Selected</Typography>;
  }

  return (
    <div className="spreadCombine2">
      <Typography variant="h3">
        <strong>Prerequisites</strong>
      </Typography>
      <Typography variant="body1">
        Ensure you have the necessary prerequisites installed and configured
        before proceeding with the spread combine process.
      </Typography>
      <br />
      <ToggleButtonGroup
        exclusive
        value={os}
        onChange={handleOs}
        aria-label="text alignment"
        sx={{ backgroundColor: "#fff5f5ff", marginTop: 1.5 }}
      >
        <ToggleButton value="win" aria-label="left aligned">
          Windows
        </ToggleButton>
        <ToggleButton value="linux" aria-label="left aligned">
          Linux
        </ToggleButton>
        <ToggleButton value="mac" aria-label="left aligned">
          MacOS
        </ToggleButton>
      </ToggleButtonGroup>
      <br />
      <Card>
        <Box
          sx={{
            backgroundColor: "#9b2086ff",
            width: sixtyPercentOfWindow,
            paddingTop: 1.5,
            paddingLeft: 1.5,
            paddingRight: 1.5,
            color: "white",
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image="/internet.png"
            alt="Internet Icon"
          />
          <CardContent sx={{ textAlign: "left" }}>
            <div className="px2" />
            <Typography variant="h5">1. Stable Internet Connection</Typography>
            <div className="px2"></div>
            <Divider sx={{ backgroundColor: "wheat", marginBottom: 1 }} />
            <Typography variant="body1">
              Ensure you have a <strong>stable internet connection</strong> to
              download necessary files and dependencies during the setup
              process.
            </Typography>
          </CardContent>
        </Box>
      </Card>
      <br />
      <Card>
        <Box
          sx={{
            paddingTop: 1.5,
            paddingLeft: 1.5,
            paddingRight: 1.5,
            backgroundColor: "#911111ff",
            color: "white",
            width: sixtyPercentOfWindow,
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image="/Git-Logo-White.svg"
            alt="Git Icon"
          />
          <CardContent sx={{ textAlign: "left" }}>
            <div className="px2" />
            <Typography variant="h5">2. Git Installed</Typography>
            <div className="px2"></div>
            <Divider sx={{ backgroundColor: "wheat", marginBottom: 1 }} />
            <Typography variant="body1">
              <strong>Install Git</strong>, a version control system that allows
              you to manage and track changes in your codebase. You can download
              Git from the official website Links for different operating
              systems are provided below
            </Typography>
            <Divider
              sx={{
                backgroundColor: "wheat",
                marginBottom: 1.5,
                marginTop: 1.5,
              }}
            />
            <GetGitDownloadButton />
          </CardContent>
        </Box>
      </Card>
      <br />
      <Card>
        <Box
          sx={{
            paddingTop: 1.5,
            paddingLeft: 1.5,
            paddingRight: 1.5,
            backgroundColor: "#39771cff",
            color: "white",
            width: sixtyPercentOfWindow,
          }}
        >
          <CardMedia
            component="img"
            height="194"
            image="/nodejsLight.svg"
            alt="Node.js Icon"
            width={194}
          />
          <CardContent sx={{ textAlign: "left" }}>
            <div className="px2" />
            <Typography variant="h5">3. Node.js Installed</Typography>
            <div className="px2"></div>
            <Divider sx={{ backgroundColor: "wheat", marginBottom: 1 }} />
            <Typography variant="body1">
              <strong>Install Node.js</strong>, a JavaScript runtime that allows
              you to run JavaScript code outside of a web browser. You can
              download Node.js from the official website Links for different
              operating systems are provided below
            </Typography>
            <Divider
              sx={{
                backgroundColor: "wheat",
                marginBottom: 1.5,
                marginTop: 1.5,
              }}
            />
            <Button
              onClick={() => {
                openLink("https://nodejs.org/en/download/");
              }}
              variant="contained"
            >
              Go Node.js website and select OS then install it
            </Button>
          </CardContent>
        </Box>
      </Card>
      <br />
      <br />
      {/* Navigation Buttons */}
      <BottomNavigationActionsButtons back={"1"} next={"3"}/>
    </div>
  );
}
