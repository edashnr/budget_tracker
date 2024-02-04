import { useState } from "react";

export const useMessageAlert = () => {
    const [open, setOpen] = useState(false);
    const [textAlert, setTextAlert] = useState('');

    const handleOpen = (textAlert) => {
        setTextAlert(textAlert);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return { open, setOpen, handleClose, handleOpen, textAlert }
};