import { Container, Box } from "@mui/material";
import ViewItems from "./ViewItems";
import Navigation from "./Navigation";
import FormBudget from "./FormBudget";
import Result from "./Result";
import { useFormBudget } from "./FormBudget/useFormBudget";

import { useAddCategory } from "./Navigation/ManagementCategories/CategorySetup/useAddCategory";

const App = () => {
  const {
    listItems,
    removeItem,
    fields,
    handleFieldChange,
    handleSubmit,
    validationAmount,
    totalAmount,
    currency,
    handleCurrency,
    editItem,
    editableId,
    handleClearAll,
    filteredData,
    handleResetFilters
  } = useFormBudget();

  
  const { handleAddCategory, categories, setCategories } = useAddCategory();

  return (
   
      <Box bgcolor={"background.default"} >
        <Navigation
          
         
          currency={currency}
          handleCurrency={handleCurrency}
          handleAddCategory={handleAddCategory}
          categories={categories}
          setCategories={setCategories}
          listItems={listItems}
        />
        <Result
          totalAmount={totalAmount}
          currency={currency}
        />
        <Container
          maxWidth="md"
          sx={{
            backgroundColor: "background.default",
            color: "text.primary",
            borderRadius: 2,
            p: 2,
            mt: 2
          }}
        >
          <FormBudget
            listItems={listItems}
            removeItem={removeItem}
            editItem={editItem}
            fields={fields}
            editableId={editableId}
            handleFieldChange={handleFieldChange}
            handleSubmit={handleSubmit}
            validationAmount={validationAmount}
            categories={categories}
            
          />
          <ViewItems
            listItems={listItems}
            removeItem={removeItem}
            editItem={editItem}
            currency={currency}
            handleClearAll={handleClearAll}
           
            categories={categories}
            filteredData={filteredData}
            handleFieldChange={handleFieldChange}
            fields={fields}
            handleResetFilters={handleResetFilters}
          />
        </Container>
      </Box>
   
  );
};

export default App;
