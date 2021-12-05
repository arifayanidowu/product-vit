import React from 'react'
import { Container, Typography } from '@mui/material'

import { useAppDispatch, useAppSelector } from 'src/state/hooks'
import { addToBasket, checkIfExceeds, getProducts } from 'src/state/slices/products/productSlice'
import ProductList from './ProductList'
import { Loader, Feedback } from '../Utils'


export default function Product() {
    const dispatch = useAppDispatch()
    const { basket, products, config, loading } = useAppSelector((state) => state.vitl)
    const [feed, setFeed] = React.useState({
        open: false,
        message: "",
    })

    React.useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const handleAddToBasket = (payload: Vitl.Product) => {
        const { isCheck } = checkIfExceeds(basket, payload, config)
        if (!isCheck) {
            dispatch(addToBasket(payload))
        } else {
            const valId = payload.nutrients[0].id.split('-')
            const firstVal = valId[0].charAt(0).toUpperCase() + valId[0].slice(1)
            const secondVal = valId[1].charAt(0).toUpperCase() + valId[1].slice(1)
            setFeed({
                open: true,
                message: `Exceeded Tolerable Upper limit for ${firstVal} ${secondVal}`
            })
        }
    }

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setFeed({
            open: false,
            message: ``
        })
    };

    return (
        <Container>
            <Feedback open={feed.open} message={feed.message} handleClose={handleClose} />
            <Loader open={loading} />
            <Typography variant="h6" gutterBottom>Personalised Vitamins</Typography>
            <ProductList {...{ handleAddToBasket, products }} />
        </Container>
    )
}
