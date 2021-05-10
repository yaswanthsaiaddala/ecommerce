import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "./../../css/cart.css";
export default class Cart extends React.Component {
  render() {
    let { cartItems, deleteItem } = this.props;
    return (
      <div className="cart">
        <h4 className="title mb-3">Cart products</h4>
        <div>
          {cartItems && cartItems.length ? (
            cartItems.map((item, index) => {
              return (
                //   <div>
                <div key={index} className="cart-item">
                  <img src={item.productImage} />
                  <div>
                    <p className="title">{item.productTitle}</p>
                    <p className="price">
                      <span> ₹{item.oldPrice}</span> ₹ {item.price}{" "}
                      <span
                        style={{
                          textDecoration: "auto",
                          color: "green",
                          fontWeight: "bold",
                        }}
                      >
                        {item.offer}
                      </span>
                      <DeleteIcon
                        className="text-danger"
                        onClick={(e) => deleteItem(item, index)}
                      />
                    </p>
                  </div>
                </div>
                //   </div>
              );
            })
          ) : (
            <p className="text-center mt-5">No products</p>
          )}
        </div>
      </div>
    );
  }
}
