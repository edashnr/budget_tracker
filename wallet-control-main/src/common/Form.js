import { Box } from '@mui/material'

const Form = ({ children, onSubmit }) => {
    return (
        <Box variant="outlined">
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </Box>
    )
};

export default Form;