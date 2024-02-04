import { useState } from "react";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import CategorySetup from "../ManagementCategories/CategorySetup";

const ManagementCategories = ({ handleAddCategory, categories, setCategories, listItems, darkMode }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleCloseWindow = () => {
        setExpanded(false)
    };

    return (
        <>
            <Tooltip title="">
                <Box display={"flex"} alignItems={"center"}
                    sx={{
                        padding: {
                            xs: 0,
                            md: 2,
                        }
                    }}>
                    <IconButton
                        aria-label="addCategory"
                        size="large"
                        sx={{ color: "white" }}
                        onClick={handleExpandClick}
                    >
                        <CategoryIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        component="span"
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}
                    >
                        Kategori Ayarları
                    </Typography>
                </Box>
            </Tooltip>
            {expanded &&
                <CategorySetup
                    handleCloseWindow={handleCloseWindow}
                    categories={categories}
                    setCategories={setCategories}
                    listItems={listItems}
                    handleAddCategory={handleAddCategory}
                    darkMode={darkMode}
                />
            }
        </>
    )
};

export default ManagementCategories;