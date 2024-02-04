import { FormControl } from "@mui/material";

const FormControlStyled = ({ children }) => {
    return (
        <FormControl sx={{ marginTop: 2, marginBottom: 2 }} fullWidth>
            {children}
        </FormControl>
    )
};

export default FormControlStyled;