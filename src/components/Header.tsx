import { AppBar, Avatar, Toolbar } from "@mui/material";
import logo from "./../assets/pokemon-logo.png"


export function Header() {


  return (
    <AppBar position="static" sx={{ backgroundColor: "#cf212a", marginBottom: "1rem", display: "flex", alignItems: "center" }}>
      <Toolbar>
        <Avatar alt="Pokemon Logo" src={logo} sx={{ width: "250px", height: "100px", margin: "0.2rem" }} />
      </Toolbar>
    </AppBar>
  );
}
