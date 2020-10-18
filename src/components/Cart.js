import React from "react";
import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100%",
  },
}));

const Cart = ({ cartItems }) => {
  const classes = useStyles();
  let totalQty = 0;
  let totalPrice = 0;

  cartItems.map((item) => {
    totalQty = totalQty + item.qty;
    totalPrice = totalPrice + item.price * item.qty;
  });

  return (
    <>
      <Grid item xs={12} sm={4}>
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
                {cartItems.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} align="right">
                    {totalQty}
                  </TableCell>
                  <TableCell>${totalPrice}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
    </>
  );
};

export default Cart;
