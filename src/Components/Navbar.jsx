import React, { useState } from "react";
import DrawerComp from "./DrawerComp"; 
import {AppBar , Toolbar , Tabs ,Tab, Button , Typography , useMediaQuery , useTheme , Container} from "@mui/material"


function Navbar() {
  const NavData = ["About Us" , "Pricing" , "Customaers" , "Solutions"]
  const [value , setValue] = useState();
  const theme = useTheme(); 
  const isMatch = useMediaQuery(theme.breakpoints.down("md")) 
  
  
  return (
    <React.Fragment>
        <AppBar sx={{background:"#183A40"}}>
          <Container maxWidth="xl">  
            <Toolbar>
                  <img src="img/Logo.png" alt="" />
                  {
                    isMatch ? (
                      <>
                         <DrawerComp />
                      </>
                    ): (
                      <>
                          <Tabs sx={{marginLeft:'auto'}} textColor="White" value={value} indicatorColor="secondary" onChange={(e , value) => setValue(value)}>

                            {NavData.map((data , i)=>(
                              <Tab key={i} sx={{textTransform:"capitalize"}}label={data}></Tab>
                            ))}   
                          </Tabs>

                          <Button sx={{background:"#0FF1F6", marginLeft:"auto" , borderRadius:"25px" , color:"#002228" ,textTransform:"capitalize"}} variant="Contained">Book a Demo</Button>
                          <Button sx={{borderRadius:"25px" , border:"1px solid #ffffff" , marginLeft:"10px",textTransform:"capitalize"}} variant="Contained">Contact Us</Button>
                      </>
                    )
                  }
            </Toolbar>

          </Container>
            
        </AppBar>
    </React.Fragment>
  )
}

export default Navbar