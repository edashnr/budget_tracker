import { Typography } from "@mui/material";
import Views from "./Views";
import SearchFields from "./SearchFields.js/index.js";

const ViewItems = ({
    listItems,
    removeItem,
    editItem,
    currency,
    handleClearAll,
    darkMode,
    categories,
    filteredData,
    handleFieldChange,
    fields,
    handleResetFilters
}) => {

    return (
        <>
            <Typography
                variant="h4"
                textAlign={"center"}
                sx={{ m: 3 }}>
                Cüzdan Yönetimi
            </Typography>
            <SearchFields
                darkMode={darkMode}
                categories={categories}
                listItems={listItems}
                fields={fields}
                handleFieldChange={handleFieldChange}
                handleResetFilters={handleResetFilters}
                filteredData={filteredData}
            />
            <Views
                listItems={listItems}
                removeItem={removeItem}
                editItem={editItem}
                currency={currency}
                handleClearAll={handleClearAll}
                darkMode={darkMode}
                filteredData={filteredData}
            />
        </>
    )
};

export default ViewItems;