import React, { useState } from 'react'
import {Drawer, IconButton, List, ListItemButton ,ListItemIcon ,ListItemText} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
const NavData = ["About Us" , "Pricing" , "Customaers" , "Solutions" , "Book a Demo" , "Contact Us"]

function DrawerComp() {
    const [OpenDrawer , setOpenDrawer ] = useState(false)
  return (
    <React.Fragment>
        <Drawer open={OpenDrawer} onClose={() => setOpenDrawer(false)}>
            <List>
                {
                    NavData.map((data , i) =>(
                        <ListItemButton onClick={()=> setOpenDrawer(false)} key={i}>
                            <ListItemIcon>
                                <ListItemText>
                                    {data}
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                }

            </List>
        </Drawer>
        <IconButton sx={{color:'white', marginLeft:"auto"}} onClick={()=> setOpenDrawer(!OpenDrawer)}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp