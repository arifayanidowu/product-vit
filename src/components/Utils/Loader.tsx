import { Backdrop, CircularProgress } from "@mui/material"


interface ILoader {
    open: boolean;
}

export default function Loader({ open }: ILoader) {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color='primary' thickness={5} />
        </Backdrop>
    )
}
