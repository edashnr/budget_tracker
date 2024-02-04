import { useState } from "react";

export const useFormFields = (initialState) => {
  const [fields, setFields] = useState(initialState);

  const handleFieldChange = (e) => {
    const { name, value, checked, type } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFields((prevFields) => ({
      ...prevFields,
      [name]: fieldValue,
    }));
  };

  return { fields, setFields, handleFieldChange };
};