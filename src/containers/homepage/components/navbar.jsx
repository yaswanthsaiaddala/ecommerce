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
      <a className="navbar-brand nav-home" href="/home">
        Ecommerce
      </a>
      <button className="btn  " onClick={(e) => props.toggleCart()}>
        Cart <ShoppingCartIcon />
      </button>
      <Badge className="badge badge-primary count-badge">
        {props.productCount}
      </Badge>
      <button className="btn btn-primary " onClick={(e) => handleModal(true)}>
        Logout
      </button>

      <LogoutModal isOpen={openModal} handleModal={handleModal} />
    </nav>
  );
}
