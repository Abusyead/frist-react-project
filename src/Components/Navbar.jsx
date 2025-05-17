import React from "react";
import {AppBar , Toolbar , Tabs ,Tab, Button , Typography} from "@mui/material"

function Navbar() {
  const NavData = ["About Us" , "Pricing" , "Customaers" , "Solutions"]
  return (
    <React.Fragment>
        <AppBar sx={{background:"#183A40" }}>
            <Toolbar>
                  <img src="img/Logo.png" alt="" />

                  <Tabs textColor="White" value={1} indicatorColor="secondary">
                    {NavData.map((data , i)=>(
                      <Tab key={i} sx={{textTransform:"capitalize"}}label={data}></Tab>
                    ))}   
                  </Tabs>

                  <Button sx={{background:"#0FF1F6", marginLeft:"auto" , borderRadius:"25px" , color:"#002228" ,textTransform:"capitalize"}} variant="Contained">Login</Button>
                  <Button sx={{borderRadius:"25px" , border:"1px solid #ffffff" , marginLeft:"10px",textTransform:"capitalize"}} variant="Contained">SignUp</Button>
            </Toolbar>
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar