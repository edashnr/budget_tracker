import { TextField } from "@mui/material";
import FormControlStyled from "./FormControlStyled";

const InputField = ({ helperText, label, type, placeholder, name, onChange, value, required, checked, onKeyDown, ref }) => {
    return (
        <FormControlStyled>
            <TextField
                variant="filled"
                helperText={helperText}
                label={label}
                type={type}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                required={required}
                checked={checked}
                onKeyDown={onKeyDown}
                ref={ref}
            />
        </FormControlStyled>
    )
};

export default InputField;