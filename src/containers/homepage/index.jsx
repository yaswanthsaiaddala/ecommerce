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
      <div>
        <Navbar toggleCart={this.toggleCart} productCount={cartItems.length} />
        <Row>
          <Col sm={isCartOpen ? 9 : 12}>
            <ProductsList
              cartHandler={this.cartHandler}
              cartItems={cartItems}
            />
          </Col>
          <Col className={`${isCartOpen ? "d-block" : "d-none"}`}>
            <Cart cartItems={cartItems} deleteItem={this.deleteItem} />
          </Col>
        </Row>
      </div>
    );
  }
}
