import { Alert, Snackbar } from "@mui/material";

const MessageAlert = ({ textAlert, handleClose, openMessage, severity }) => {
    const alertSeverity = severity ? severity : 'info';
    return (
        <Snackbar
            open={openMessage}
            autoHideDuration={1500}
            onClose={handleClose}
        >
            <Alert
                severity={alertSeverity}
            >
                {textAlert}
            </Alert>
        </Snackbar>
    )
};

export default MessageAlert;