import { Drawer, IconButton, Typography, Grid, Divider } from "@mui/material"
import { Close } from "@mui/icons-material"

import Basket from "./Basket"


export default function SliderMenu({ open, toggleDrawer }: ISliderMenu) {
    return (
        <Drawer anchor="right" open={open} onClose={toggleDrawer}>
            <Grid container justifyContent="space-between" alignItems="center" sx={{ paddingX: 2, paddingY: 2 }}>
                <Grid item>
                    <Typography>Item(s)</Typography>
                </Grid>
                <Grid item>
                    <IconButton onClick={toggleDrawer}>
                        <Close />
                    </IconButton>
                </Grid>
            </Grid>
            <Divider />
            <Basket />
        </Drawer>
    )
}
