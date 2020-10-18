import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { useParams, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  media: {},
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginTop: "10px",
  },
  btn: {
    margin: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
  },
}));

const ProductDetails = () => {
  const { id } = useParams();
  const classes = useStyles();
  const { image_url, name, price, description } = useSelector((st) => ({
    ...st.products[id],
  }));
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia title={name} className={classes.media} />
        <img className={classes.image} src={image_url} alt={name}></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body1">${price}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </CardActionArea>
      <Link to="/" className={classes.link}>
        <Button className={classes.btn} variant="contained">
          Go Back
        </Button>
      </Link>
    </Card>
  );
};

export default ProductDetails;
