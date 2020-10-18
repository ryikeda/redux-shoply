import React from "react";
import { useHistory } from "react-router-dom";
import ProductCardBtn from "./ProductCartBtn";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    height: "100%",
  },
  media: { height: 0 },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginTop: "10px",
  },
}));

const ProductCard = ({ item: { image_url, name, price }, id }) => {
  const history = useHistory();
  const classes = useStyles();
  const handleClick = () => {
    history.push(`/products/${id}`);
  };
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea onClick={handleClick}>
          <CardMedia title={name} className={classes.media} />
          <img className={classes.image} src={image_url} alt="item"></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body1">${price}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <ProductCardBtn id={id} />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
