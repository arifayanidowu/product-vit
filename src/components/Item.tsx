import { Card, CardMedia, Typography, Button } from '@mui/material'


export default function Item({ title, label, media, onClick }: IItem) {
    return (
        <Card elevation={1} sx={{ paddingY: 2, textAlign: 'center' }}>
            <CardMedia
                component="img"
                height="100"
                image={media}
                alt={title}
                sx={{ color: 'primary' }}
            />
            <Typography sx={{ marginY: 2 }}>{title}</Typography>
            <Button role="button" variant="contained" disableElevation onClick={onClick}>
                {label}
            </Button>
        </Card>
    )
}
