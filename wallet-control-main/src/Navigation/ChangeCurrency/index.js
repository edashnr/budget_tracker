import { useState } from 'react';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography, Fade } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import { currencyData } from '../../common/utils/data';

const ChangeCurrency = ({ currency, handleCurrency }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    return (
        <Tooltip
            
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: {
                        xs: 0,
                        md: 2,
                    }
                }}>
                <IconButton
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <PaidIcon sx={{ color: "white" }} />
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
                    {currency}
                </Typography>
                <Menu
                    id="fade-menu"
                    MenuListProps={{
                        'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                    {currencyData.map((item) => (
                        <MenuItem
                            key={item}
                            onClick={() => {
                                handleClose();
                                handleCurrency(item);
                            }}>
                            {item}
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </Tooltip>
    )
};

export default ChangeCurrency;