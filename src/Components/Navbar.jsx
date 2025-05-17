import React from "react";
import {AppBar , Toolbar , } from "@mui/material"

function Navbar() {
  return (
    <React.Fragment>
        <AppBar sx={{background:"#183A40" }}>
            <Toolbar>
                   <img src="img/Logo.png" alt="" />
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar