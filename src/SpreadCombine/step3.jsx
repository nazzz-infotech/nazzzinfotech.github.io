import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./SpreadCombine.scss";
import { useEffect, useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import BottomNavigationActionsButtons from "./bottomNavigationActionsButtons";

export default function Step3() {
  const codeGitString = `git clone https://github.com/nazzz-infotech/SpreadCombine.git`;
  const codeChangeDir = `cd SpreadCombine`;
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

  return (
    <div className="spreadCombine3">
      <Typography variant="h3">
        <strong>Clone the Repository</strong>
      </Typography>
      <br />
      <Typography variant="body1">
        Use the following command to clone the repository to your local machine:
      </Typography>
      <br />
      <div className="openshell">
        <Typography variant="h4">
          <b>
            First open your{" "}
            <i style={{ backgroundColor: "#bbff0088" }}>
              command prompt / terminal / powershell
            </i>{" "}
            your local machine.
          </b>
        </Typography>
      </div>
      <br />
      <Card>
        <Box sx={{ backgroundColor: "#fffbc0ff", width: sixtyPercentOfWindow }}>
          <CardContent sx={{ textAlign: "left" }}>
            <Typography variant="h5">Clone using Git</Typography>
            <div className="px2"></div>
            <Typography variant="body1">
              use the command below to clone the repository:
            </Typography>
            <div className="px2"></div>
            <Divider sx={{ backgroundColor: "black", marginBottom: 1 }} />
            <div className="row">
              <SyntaxHighlighter language="bash" style={oneDark}>
                {codeGitString}
              </SyntaxHighlighter>
              <Tooltip title="Copy Code" placement="top">
                <IconButton
                  sx={{ marginLeft: 2 }}
                  onClick={() => {
                    navigator.clipboard.writeText(codeGitString);
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
        <Box sx={{ backgroundColor: "#e4ffb3ff", width: sixtyPercentOfWindow }}>
          <CardContent sx={{ textAlign: "left" }}>
            <Typography variant="h5">Go to project</Typography>
            <div className="px2"></div>
            <Typography variant="body1">
              After cloning the repository, navigate to the project directory /
              folder:
            </Typography>
            <div className="px2"></div>
            <Divider sx={{ backgroundColor: "black", marginBottom: 1 }} />
            <div className="row">
              <SyntaxHighlighter language="bash" style={oneDark}>
                {codeChangeDir}
              </SyntaxHighlighter>
              <Tooltip title="Copy Code" placement="top">
                <IconButton
                  sx={{ marginLeft: 2 }}
                  onClick={() => {
                    navigator.clipboard.writeText(codeChangeDir);
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
      <BottomNavigationActionsButtons back={2} next={4} />
    </div>
  );
}
