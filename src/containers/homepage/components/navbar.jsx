import React, { Component, useState } from "react";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge } from "reactstrap";
import "./../../../css/login.css";
import LogoutModal from "./logoutmodal";
export default function Navbar(props) {
  const [openModal, handleModal] = useState(false);
  // }
  // }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  px-5">
      {/* logo  */}
      <a className="navbar-brand nav-home" href="/home">
        Ecommerce
      </a>
      {/* logo  */}
      {/* cart button */}
      <button className="btn  " onClick={(e) => props.toggleCart()}>
        Cart <ShoppingCartIcon />
      </button>
      {/* cart button */}
      {/* cart count badge */}
      <Badge className="badge badge-primary count-badge">
        {props.productCount}
      </Badge>
      {/* cart count badge */}
      {/* logout button starts */}
      <button className="btn btn-primary " onClick={(e) => handleModal(true)}>
        Logout
      </button>
      {/* logout button ends */}
      {/* Logo ute componenrt starts */}
      <LogoutModal isOpen={openModal} handleModal={handleModal} />
      {/* Logo ute componenrt ends */}
    </nav>
  );
}
