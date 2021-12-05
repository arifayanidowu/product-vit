import React from 'react'
import { DeleteOutlineOutlined } from '@mui/icons-material'
import { Typography, Box, Grid, IconButton, Divider } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'src/state/hooks'
import { removeFromBasket } from 'src/state/slices/products/productSlice'
import EmptyState from './EmptyState'


export default function Basket() {
    const { basket } = useAppSelector((state) => state.vitl)
    const dispatch = useAppDispatch()

    return (
        <Box sx={{ padding: 2, width: 350 }} role="presentation">
            {basket.length ? basket && basket?.map((item, i) => (
                <React.Fragment key={i}>
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs={2} md={2} sm={2}>
                            <img height="60px" src="/assets/vitl-img.png" alt={item.name} />
                        </Grid>
                        <Grid item xs={8} md={8} sm={8} sx={{ textAlign: 'center' }}>
                            <Typography variant="body2">{item.name}</Typography>
                            <Typography variant="subtitle2">Price: {item.price}</Typography>
                        </Grid>
                        <Grid item xs={2} md={2} sm={2}>
                            <IconButton onClick={() => dispatch(removeFromBasket(item))} color="error">
                                <DeleteOutlineOutlined />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider />
                </React.Fragment>
            ))
                :
                <EmptyState />
            }
        </Box >
    )
}
