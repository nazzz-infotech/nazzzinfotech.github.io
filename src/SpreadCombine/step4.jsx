import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import "./SpreadCombine.scss";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Link } from "react-router-dom";

export default function Step4() {
  const [sixtyPercentOfWindow, setSixtyPercentOfWindow] = useState(
    window.innerWidth * 0.6
  ); // get
  const installDependencies = `npm install`;
  const runDev = `npm run dev`;

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

  return (
    <div className="spreadCombine4">
      <Typography variant="h3">
        <strong>Final Steps</strong>
      </Typography>
      <br />
      <Typography variant="body1">
        Finally, we can combine multiple CSV files into one (CSV and XLSX both).
        This is useful when you have data split across several files and want to
        analyze it as a whole.
      </Typography>
      <br />
      <Card>
        <Box sx={{ backgroundColor: "#e4ffb3ff", width: sixtyPercentOfWindow }}>
          <CardContent sx={{ textAlign: "left" }}>
            <Typography variant="h5">Install All dependency</Typography>
            <div className="px2"></div>
            <Typography variant="body1">
              Run the following command to install all dependencies listed in
              the package.json file:
            </Typography>
            <div className="px2"></div>
            <Divider sx={{ backgroundColor: "black", marginBottom: 1 }} />
            <div className="row">
              <SyntaxHighlighter language="shell" style={oneDark}>
                {installDependencies}
              </SyntaxHighlighter>
              <Tooltip title="Copy Code" placement="top">
                <IconButton
                  sx={{ marginLeft: 2 }}
                  onClick={() => {
                    navigator.clipboard.writeText(installDependencies);
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </div>
          </CardContent>
        </Box>
      </Card>
      <br />
      <Card>
        <Box sx={{ backgroundColor: "#d4fffbff", width: sixtyPercentOfWindow }}>
          <CardContent sx={{ textAlign: "left" }}>
            <Typography variant="h5">Run ad development</Typography>
            <div className="px2"></div>
            <Typography variant="body1">
              After installing the dependencies, you can run the development
              server using the following command:
            </Typography>
            <div className="px2"></div>
            <Divider sx={{ backgroundColor: "black", marginBottom: 1 }} />
            <div className="row">
              <SyntaxHighlighter language="shell" style={oneDark}>
                {runDev}
              </SyntaxHighlighter>
              <Tooltip title="Copy Code" placement="top">
                <IconButton
                  sx={{ marginLeft: 2 }}
                  onClick={() => {
                    navigator.clipboard.writeText(runDev);
                  }}
                >
                  <ContentCopyIcon />
                </IconButton>
              </Tooltip>
            </div>
          </CardContent>
        </Box>
      </Card>
      <br /><br />
      <div className="bottomNavigationActions">
        <Link to="/">
          <Button variant="contained">Go To Home</Button>
        </Link>
      </div>
    </div>
  );
}
