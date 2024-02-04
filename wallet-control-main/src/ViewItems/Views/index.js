import { ButtonGroup } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import ClearIcon from '@mui/icons-material/Clear';
import { useLocalStorage } from "../../common/utils/useLocalStorage";
import { useMessageAlert } from "../../common/MessageAlert/useMessageAlert";
import MessageAlert from "../../common/MessageAlert";
import ButtonStyled from "../../common/ButtonStyled";
import GridView from "./GridView";
import ListView from "./ListView";

const Views = ({ listItems, removeItem, editItem, currency, handleClearAll, darkMode, filteredData }) => {
    const { handleOpen, open, handleClose, textAlert } = useMessageAlert();
    const [view, setView] = useLocalStorage("view", false);

    const handleGridView = () => {
        if (listItems.length === 0) {
            handleOpen(" Üzgünüz, listede ızgara görünümünü görüntüleyecek öğe yok");
        }
        setView(true);
    };

    const handleListView = () => {
        if (listItems.length === 0) {
            handleOpen("Üzgünüz, listede liste görünümünü görüntüleyecek öğe yok");
        }
        setView(false);
    };

    return (
        <>
            <ButtonGroup variant="contained" fullWidth sx={{ mb: 4, mt: 4 }}>
                <ButtonStyled
                    icon={<GridViewIcon />}
                    buttonText={"Izgara Görünümü"}
                    onClick={handleGridView}
                />
                <ButtonStyled
                    icon={<FormatListBulletedIcon />}
                    buttonText={"Liste Görünümü"}
                    onClick={handleListView}
                />
            </ButtonGroup>
            {view
                ? <GridView
                    removeItem={removeItem}
                    editItem={editItem}
                    currency={currency}
                    darkMode={darkMode}
                    listItems={listItems}
                    filteredData={filteredData}
                />
                : <ListView
                    removeItem={removeItem}
                    editItem={editItem}
                    currency={currency}
                    darkMode={darkMode}
                    listItems={listItems}
                    filteredData={filteredData}
                />
            }
            <MessageAlert
                openMessage={open}
                handleClose={handleClose}
                textAlert={textAlert}
            />
            {listItems.length !== 0 && filteredData.length !== 0 &&
                <ButtonStyled
                    buttonText={"Hepsini Sil"}
                    icon={<ClearIcon />}
                    onClick={handleClearAll}
                />
            }
        </>
    )
};

export default Views;