import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { APP_ROUTES } from "../../configs/routes";
import { useHistory } from "react-router-dom";
import "./header.css";

export default function Header() {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            className="header"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => history.push(APP_ROUTES.HOME)}
          >
            GrowToMation
          </Typography>

          <p className="header" onClick={() => history.push(APP_ROUTES.HOME)}>
            Home
          </p>
          <p
            className="header"
            onClick={() => history.push(APP_ROUTES.CREATE_TICKET)}
          >
            Create Ticket
          </p>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
