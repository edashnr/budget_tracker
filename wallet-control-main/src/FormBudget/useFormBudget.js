import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useFormFields } from "../common/utils/useFormFields";
import { useLocalStorage } from "../common/utils/useLocalStorage";
import { currencyData } from "../common/utils/data";
import { useMessageAlert } from "../common/MessageAlert/useMessageAlert";

export const useFormBudget = () => {
    const { handleOpen } = useMessageAlert();
    const [currency, setCurrency] = useLocalStorage("currency", currencyData[0]);
    const [listItems, setListItems] = useLocalStorage("listItems", []);
    const [totalAmount, setTotalAmount] = useState(0);
    const [editableId, setEditableId] = useState(null);
    const [filteredData, setFilteredData] = useState(listItems);

    const { fields, setFields, handleFieldChange } = useFormFields({
        description: '',
        category: '',
        variant: '',
        amount: '',
        date: '',
        searchDescription: '',
        searchCategory: '',
        searchVariant: ''
    });

    const { description, category, variant, amount, date, searchDescription, searchCategory, searchVariant } = fields;

    const formattedAmount = Number(amount).toFixed(2);

    const validationAmount = (event) => {
        if (event.key === "-") {
            event.preventDefault();
        }
    };

    const addItem = () => {
        const newItem = {
            description: description,
            category: category,
            variant: variant,
            amount: formattedAmount,
            date: date,
            searchDescription: searchDescription,
            searchCategory: searchCategory,
            searchVariant: searchVariant,
            id: nanoid(),
        };
        setListItems(listItems => ([...listItems, newItem]));
    };

    const removeItem = (id) => {
        setListItems(listItems.filter((item) => item.id !== id));
    };

    const editItem = (id) => {
        const editableData = listItems.find((editableData) => editableData.id === id);
        setFields({ ...editableData });
        setEditableId(id);
    };

    const updateItem = () => {
        const updatedData = listItems.map((item) =>
            item.id === editableId ? { id: editableId, ...fields } : item
        );
        setListItems(updatedData);
        setEditableId(null);
        handleOpen("test");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!editableId) {
            addItem();
        } else {
            updateItem();
        }
        setFields({
            description: '',
            category: '',
            variant: '',
            amount: '',
            date: '',
            searchDescription: '',
            searchCategory: '',
            searchVariant: ''
        });
    };

    const handleClearAll = () => {
        setListItems([])
    };

    const handleCurrency = (newCurrency) => {
        setCurrency(newCurrency);
    };

    const calculateTotalAmount = (items) => {
        return items.reduce((accumulator, currentItem) => {
            if (currentItem.variant === "expense") {
                return accumulator - Number(currentItem.amount);
            } else {
                return accumulator + Number(currentItem.amount);
            }
        }, 0);
    };

    const handleResetFilters = () => {
        setFields((prevFields) => ({
            ...prevFields,
            searchDescription: '',
            searchCategory: '',
            searchVariant: ''
        }));
    };

    const searchData = (listItems, searchDescription, searchCategory, searchVariant) => {
        if ((!searchDescription || searchDescription === "") && (!searchVariant || searchVariant === "") && (!searchCategory || searchCategory === "")) {
            return listItems;
        } else {
            const filteredList = listItems.filter(({ description, variant, category }) => {
                const includesDescription = description && description.toLowerCase().includes(searchDescription.toLowerCase());
                const matchesSubCategory = !searchVariant || variant === searchVariant;
                const matchesCategory = !searchCategory || category === searchCategory;
                return includesDescription && matchesSubCategory && matchesCategory;
            });
            return filteredList;
        }
    };

    useEffect(() => {
        const filteredList = searchData(listItems, searchDescription, searchCategory, searchVariant);
        setFilteredData(filteredList);
    }, [listItems, searchDescription, searchCategory, searchVariant]);

    useEffect(() => {
        const total = calculateTotalAmount(listItems);
        setTotalAmount(total);
    }, [listItems]);

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [editableId]);

    return {
        handleSubmit,
        listItems,
        setListItems,
        removeItem,
        fields,
        handleFieldChange,
        validationAmount,
        totalAmount,
        currency,
        handleCurrency,
        editItem,
        editableId,
        setFields,
        handleClearAll,
        filteredData,
        handleResetFilters
    }
};

