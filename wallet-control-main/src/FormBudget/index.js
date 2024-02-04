import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Form from "../common/Form";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import ButtonStyled from "../common/ButtonStyled";
import RadioField from "../common/RadioField";
import { radioData } from "../common/utils/data";

const FormBudget = ({ fields, handleFieldChange, handleSubmit, validationAmount, editableId, categories, darkMode }) => {
    const { description, category, variant, amount, date } = fields;

    return (
        <Box sx={{
            mb: 4,
            mt: 6,
            p: 2,
            borderRadius: 2,
            backgroundColor: darkMode ? grey[800] : grey[200]
        }}
        >
            <Typography
                variant="h3"
                textAlign={"center"}
            >
                BÜTÇE TAKİP SİSTEMİ

            </Typography>
            <Form onSubmit={handleSubmit}>
                <RadioField
                    labelText={"Listeye ne eklemek istiyorsunuz?"}
                    name="variant"
                    value={variant}
                    options={radioData}
                    onChange={handleFieldChange}
                />
                <SelectField
                    
                    label="Kategori"
                    name="category"
                    options={categories}
                    onChange={handleFieldChange}
                    value={category}
                    required
                />
                <InputField
                    
                    label="Gider/gelir adını belirtin"
                    type="text"
                    name="description"
                    placeholder="Gider/gelir adını belirtin"
                    value={description}
                    onChange={handleFieldChange}
                    required
                />
                <InputField
                    
                    label="Miktarı girin"
                    type="number"
                    name="amount"
                    placeholder="Miktarı girin"
                    value={amount}
                    onChange={handleFieldChange}
                    onKeyDown={validationAmount}
                    required
                />
                <InputField
                   
                    type="date"
                    name="date"
                    value={date}
                    onChange={handleFieldChange}
                    required
                />
                <ButtonStyled
                    buttonText={!editableId ? "Listeye Ekle" : "Değişiklikleri Kaydet"}
                    type="submit"
                    icon={<ControlPointIcon />}
                />
            </Form>
        </Box>
    )
};

export default FormBudget;