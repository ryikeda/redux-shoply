import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: "100%",
  },
  media: {},
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginTop: "10px",
  },
}));

const ProductCard = ({ item: { image_url, name, price, description } }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia title={name} className={classes.media} />
          <img className={classes.image} src={image_url}></img>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body1">${price}</Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button fullWidth variant="contained">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
