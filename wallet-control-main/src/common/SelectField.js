import { InputLabel, MenuItem, Select, FormHelperText } from "@mui/material";
import FormControlStyled from "./FormControlStyled";

const SelectField = ({ label, onChange, name, value, required, options, helperText }) => {
    return (
        <FormControlStyled >
            <InputLabel>
                {label}
            </InputLabel>
            <Select
                variant="filled"
                onChange={onChange}
                name={name}
                value={value}
                required={required}
            >
                {options.map((option, index) => (
                    <MenuItem
                        value={option}
                        key={`${index}-${option}`}
                    >{option}
                    </MenuItem>
                ))}
            </Select>
            <FormHelperText>{helperText}</FormHelperText>
        </FormControlStyled>
    )
};

export default SelectField;