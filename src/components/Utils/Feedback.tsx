import { Close } from '@mui/icons-material'
import { Snackbar, IconButton } from '@mui/material'


interface IFeedback {
    open: boolean;
    message: string;
    handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
}

export default function Feedback({ open, message, handleClose }: IFeedback) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            message={message}
            onClose={handleClose}
            action={
                <IconButton
                    size="small"
                    aria-label="close"
                    color="inherit"
                    onClick={handleClose}
                >
                    <Close fontSize="small" />
                </IconButton>
            }
        />
    )
}
