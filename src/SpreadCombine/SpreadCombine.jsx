import { Button, createTheme, ThemeProvider, Typography } from "@mui/material";
import "./SpreadCombine.scss";
import { useParams } from "react-router-dom";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";

function SpreadCombine() {
  let { step } = useParams();

  const myTheme = createTheme({
    palette: {
      primary: {
        main: "#fdd835",
      },
      secondary: {
        main: "#64dd17",
      },
    },
  });

  return (
    <ThemeProvider theme={myTheme}>
      {(() => {
        switch (step) {
          case "1":
            return <Step1 />;
          case "2":
            return <Step2 />;
          case "3":
            return <Step3 />;
          case "4":
            return <Step4 />;
          default:
            return <Typography variant="h4">Unknown Step</Typography>;
        }
      })()}
    </ThemeProvider>
  );
}

export default SpreadCombine;
