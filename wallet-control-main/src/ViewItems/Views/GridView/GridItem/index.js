import { Grid, Card, CardActions, CardHeader, CardContent, Avatar, Typography } from "@mui/material";
import { green, red, grey } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import ButtonStyled from "../../../../common/ButtonStyled";
import { formatPrice } from "../../../../common/utils/formatPrice";

const GridItem = ({ description, category, onClickRemove, onClickEdit, variant, amount, date, currency, darkMode }) => {

    return (
        <Grid item xs={12} md={6}>
            <Card sx={{ mb: 2, backgroundColor: darkMode ? grey[700] : grey[200] }}>
                <CardHeader
                    avatar={variant === "expense"
                        ? <Avatar sx={{ bgcolor: red[500] }}>
                            E
                        </Avatar>
                        :
                        <Avatar sx={{ bgcolor: green[500] }}>
                            I
                        </Avatar>
                    }
                    title={
                        <Typography
                            variant="h4"
                        >
                            {category}
                        </Typography>
                    }
                    subheader={
                        <Typography
                            variant="h6"
                            component={"p"}
                        >
                            {date}
                        </Typography>
                    }
                />
                <CardContent>
                    <Typography
                        variant="h5"
                        component={"p"}
                    >
                        {formatPrice(amount, currency)} - {description}
                    </Typography>
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                    <ButtonStyled
                        buttonText={"Remove"}
                        icon={<DeleteIcon />}
                        onClick={onClickRemove}
                    />
                    <ButtonStyled
                        buttonText={"Edit"}
                        icon={<EditIcon />}
                        onClick={onClickEdit}
                    />
                </CardActions>
            </Card>
        </Grid>
    )
};

export default GridItem;