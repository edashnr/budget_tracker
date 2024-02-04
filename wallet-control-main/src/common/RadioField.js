import { RadioGroup, FormLabel, FormControlLabel, Radio } from "@mui/material"
import FormControlStyled from "./FormControlStyled";

const RadioField = ({ name, options, value, onChange, labelText }) => {
    return (
        <FormControlStyled>
            <FormLabel>{labelText}</FormLabel>
            <RadioGroup
                row
                name={name}
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        checked={value === option.value}
                        control={<Radio />}
                        label={option.label}
                        required
                    />
                ))}
            </RadioGroup>
        </FormControlStyled>
    )
};

export default RadioField;