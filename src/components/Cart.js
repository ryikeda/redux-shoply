import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { calculateTotalQuantity } from "../helpers";
import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  btn: {
    margin: theme.spacing(2),
  },
}));

const Cart = () => {
  const history = useHistory();
  const { products, cartItems, cartValue } = useSelector((state) => state);

  const classes = useStyles();
  let totalQty = calculateTotalQuantity(cartItems);

  return (
    <Container maxWidth="sm">
      <Paper className={classes.root}>
        <Typography variant="h5">Shopping Cart</Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="right">Qty</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(cartItems).map(([key, item]) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {products[key].name}
                  </TableCell>
                  <TableCell align="right">{cartItems[key]}</TableCell>
                  <TableCell align="right">{products[key].price}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2} align="right">
                  {totalQty}
                </TableCell>
                <TableCell align="right">${cartValue}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Button
            onClick={() => {
              history.push("/");
            }}
            variant="contained"
            className={classes.btn}
          >
            Go back
          </Button>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default Cart;
