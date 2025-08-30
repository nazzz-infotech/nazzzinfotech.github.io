import { Link, Route, Routes } from "react-router-dom";
import SpreadCombine from "./SpreadCombine/SpreadCombine";
import { Typography } from "@mui/material";
import MatLink from "@mui/material/Link";

function App() {
  return (
    <>
      {/* Define Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <Link to="/spreadcombine/1" style={{ textDecoration: "none" }}>
              <MatLink
                underline="hover"
                color="inherit"
                sx={{ cursor: "pointer", fontSize: "20px", margin: "20px" }}
              >
                <Typography variant="h4" color="#854882ff">
                  SpreadCombine
                </Typography>
              </MatLink>
            </Link>
          }
        />
        <Route path="/spreadcombine/:step" element={<SpreadCombine />} />
      </Routes>
    </>
  );
}
export default App;
