import { Typography, Box } from "@mui/material"

export default function EmptyState() {
    return (
        <Box sx={{ textAlign: "center", paddingY: 15 }}>
            <img src='/assets/shopping-cart.png' alt="Shopping Cart" height="130" />
            <Typography variant="h5" color="slategrey" sx={{ marginTop: 1, padding: 3 }}>Item List is Empty</Typography>
        </Box>
    )
}
