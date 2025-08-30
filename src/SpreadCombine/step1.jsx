import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Step1() {
  return (
    <div className="spreadCombine">
      <Typography variant="h2" component={"strong"}>
        <strong>SpreadCombine</strong>
      </Typography>
      <br />
      <Typography variant="body1">
        A Cross-Platform Desktop app to combine multiple CSV files into a single
        CSV / XLSX File
      </Typography>
      <br />
      <Link to={"/spreadcombine/2"}>
        <Button variant="contained" color="primary">
          Let's Get Started
        </Button>
      </Link>
    </div>
  );
}
