import { Button } from "@mui/material";

const ButtonStyled = ({ buttonText, onClick, type, icon }) => {
    const buttonStyles = {
        backgroundColor: '#333', // Dark color of your choice
        color: '#fff',          // Text color (white in this case)
        // Add any additional styles as needed
    };

    return (
        <Button
            variant="contained"
            startIcon={icon}
            type={type}
            onClick={onClick}
            style={buttonStyles}>
            {buttonText}
        </Button>
    );
};

export default ButtonStyled;
