import React, { Component } from "react";
import Navbar from "./components/navbar";
import ProductsList from "./components/productslist";
import Cart from "./../cart/index";
import { Row, Col } from "reactstrap";
export default class HomePage extends React.Component {
  state = {
    isCartOpen: false,
    cartItems: [],
  };
  componentDidMount() {}
  toggleCart = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen });
  };
  cartHandler = (data) => {
    console.log("cart data", data);
    this.setState({ isCartOpen: false });
  };
  deleteItem = (item, index) => {
    let { cartItems } = this.state;
    cartItems.splice(index, 1);
    this.setState({ cartItems: cartItems });
  };
  render() {
    let { isCartOpen, cartItems } = this.state;
    return (
      <div style={{ overflowX: "hidden" }}>
        {/* Nav bar components starts */}
        <Navbar toggleCart={this.toggleCart} productCount={cartItems.length} />
        {/* Nav bar ends */}
        <Row>
          {/* Display of product list starts compnent */}
          <Col sm={isCartOpen ? 9 : 12}>
            <ProductsList
              cartHandler={this.cartHandler}
              cartItems={cartItems}
            />
          </Col>
          {/* Display of product list end compnent */}
          <Col className={`${isCartOpen ? "d-block" : "d-none"}`}>
            {/* DIsplay of cart component ends*/}
            <Cart cartItems={cartItems} deleteItem={this.deleteItem} />
            {/* DIsplay of cart component  strts*/}
          </Col>
        </Row>
      </div>
    );
  }
}
