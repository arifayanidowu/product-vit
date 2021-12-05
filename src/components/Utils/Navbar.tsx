import { AppBar, Toolbar, Box, IconButton, Badge } from '@mui/material'
import { ShoppingCartCheckoutOutlined } from '@mui/icons-material'
import { useAppSelector } from 'src/state/hooks'


export default function Navbar({ toggleDrawer }: Pick<ISliderMenu, 'toggleDrawer'>) {
    const { basket } = useAppSelector((state) => state.vitl)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ backgroundColor: 'transparent' }}>
                <Box sx={{ mr: 2 }} />
                <Toolbar sx={{ flexGrow: 1, marginLeft: 'auto' }}>
                    <IconButton onClick={toggleDrawer}>
                        <Badge badgeContent={basket?.length} color="primary">
                            <ShoppingCartCheckoutOutlined />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
