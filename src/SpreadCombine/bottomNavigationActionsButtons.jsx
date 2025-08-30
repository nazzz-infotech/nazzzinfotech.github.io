import { Button, Card } from "@mui/material";
import { Link } from "react-router-dom";
import "./SpreadCombine.scss";

export default function BottomNavigationActionsButtons({ back, next }) {
  return (
    <Card>
      <div className="bottomNavigationActions">
        <Link to={`/spreadcombine/${back}`}>
          <Button variant="contained">{"<<"}Back</Button>
        </Link>
        <span style={{ flexGrow: 1 }}></span>
        <Link to={`/spreadcombine/${next}`}>
          <Button variant="contained">Next{">>"}</Button>
        </Link>
      </div>
    </Card>
  );
}
