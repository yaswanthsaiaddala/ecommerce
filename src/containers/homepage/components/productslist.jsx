import React, { Component } from "react";
import { Row, Col, Card } from "reactstrap";
import Select from "react-select";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ForwardIcon from "./../../../assets/forward.png";
import data from "./../../../json/products.json";
import "./../../../css/product.css";

// import image1 from "./../../../assets/wedding_collection/wedding_collection_1.jpg";
export default class ProductsList extends React.Component {
  state = {
    productListData: [],
    productsCount: 5,
    options: [
      {
        label: 5,
        value: 5,
      },
      {
        label: 10,
        value: 10,
      },
      {
        label: 15,
        value: 15,
      },
    ],
    selectedLimit: {
      label: 5,
      value: 5,
    },
    sort: "",
    pageNo: 1,
  };
  componentDidMount() {
    console.log("jon chekx", data);
    this.setState({ productListData: data });
  }
  // sort filter starts
  sortFilter = (sortValue) => {
    let { productListData } = this.state;
    this.setState({ sort: sortValue });
    if (sortValue == "l2h") {
      productListData.sort((a, b) => {
        return a.price - b.price;
      });
    } else {
      productListData.sort((a, b) => {
        return b.price - a.price;
      });
    }

    this.setState({ productListData: productListData });
  };
  // sort filter ends
  //on page chnage it was called
  pageChange = (pageNo, type) => {
    let { selectedLimit, productListData } = this.state;
    let newPage;
    if (type == "prev" && pageNo != 1) {
      newPage = pageNo - 1;
    } else if (
      type == "next" &&
      pageNo + 1 < data.length / selectedLimit.value
    ) {
      newPage = pageNo + 1;
    } else {
      newPage = pageNo;
    }
    let modifiedData = [];
    if (newPage != pageNo) {
      let start, end;
      start = selectedLimit.value * (newPage - 1) + 1;
      //   end = (newPage - 1) * selectedLimit.value;
      end = start + selectedLimit.value;

      modifiedData = data.slice(start, end);
      console.log(start, end);
    } else {
      modifiedData = productListData;
    }
    this.setState({
      pageNo: newPage,
      productListData: modifiedData,
      sort: null,
    });
  };
  //on page chnage it was called ends
  //to handle the products added to cart
  cartHandler = (item) => {
    let { cartHandler, cartItems } = this.props;
    console.log("------item--------", item);
    let matched = false;
    cartItems.forEach((_item, index) => {
      if (_item.productId == item.productId) {
        matched = true;
      }
    });

    if (!matched) {
      cartItems.push(item);
    }
    cartHandler(cartItems);
    // console.log("filtered data", filteredData);
  };
  //to handle the products added to cart ends
  render() {
    let {
      productListData,
      productsCount,
      options,
      selectedLimit,
      sort,
      pageNo,
    } = this.state;

    return (
      <div className="m-3">
        <div className="d-flex">
          <div>
            <p className="pagination-text">No of products to show : </p>
          </div>
          <div>
            {/* no of product display dropdown starts */}
            <Select
              options={options}
              value={selectedLimit}
              onChange={(value) => {
                this.setState({
                  selectedLimit: value,
                  productListData: data,
                  sort: "",
                  pageNo: 1,
                });
              }}
              className="pagination-selector"
            />
          </div>
          {/* no of product display dropdown starts */}
          {/* sor t filter starts */}
          <div className="mx-3">
            <p className="pagination-text ">
              {" "}
              &nbsp;Sort by :{" "}
              <span
                className={`${sort == "h2l" ? "active" : ""}`}
                onClick={(e) => this.sortFilter("h2l")}
              >
                High to Low
              </span>{" "}
              -{" "}
              <span
                className={`${sort == "l2h" ? "active" : ""}`}
                onClick={(e) => this.sortFilter("l2h")}
              >
                Low to High
              </span>
            </p>
          </div>
          {/* sor t filter ends */}
          {/* change of page starts */}
          <div className="mlauto">
            {" "}
            <ArrowBackIosIcon
              onClick={(e) => this.pageChange(pageNo, "prev")}
            />
            <span className="px-2 pr-3 mt-1">{pageNo}</span>
            <ArrowForwardIosIcon
              onClick={(e) => this.pageChange(pageNo, "next")}
            />
          </div>
          {/* change of page ends */}
        </div>
        <Row>
          {/* display of products start */}
          {productListData && productListData.length > 0
            ? productListData.map((item, index) => {
                if (index < selectedLimit.value) {
                  return (
                    <Col sm={4} key={index} className="mb-3">
                      <Card className="product-card">
                        <div className="image-div">
                          <img
                            src={item.productImage}
                            alt="wedding-collection-16"
                            border="0"
                          />
                        </div>
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
                        </p>
                        <div className="d-flex justify-content-center">
                          <button
                            className="btn btn-success cart-btn"
                            onClick={(e) => this.cartHandler(item)}
                          >
                            Add to cart
                          </button>
                        </div>
                      </Card>
                    </Col>
                  );
                }
              })
            : null}
          {/* display of products ends */}
        </Row>
      </div>
    );
  }
}
