import { Grid } from '@mui/material'
import Item from '../Item'

interface IProps {
    handleAddToBasket: (arg: Vitl.Product) => void;
    products: Vitl.Product[]
}

export default function ProductList({ handleAddToBasket, products }: IProps) {
    return (
        <Grid container alignItems="center" spacing={2}>
            {products.map((item, i) => (
                <Grid item key={i} md={2} sm={4} xs={12}>
                    <Item media="/assets/vitl-img.png" title={item.name} label="Add to basket" onClick={() => handleAddToBasket(item)} />
                </Grid>
            ))}
        </Grid>
    )
}
