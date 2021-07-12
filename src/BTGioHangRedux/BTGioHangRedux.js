import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import ProductList from "./ProductList";

export default class BTGioHangRedux extends Component {
 

 

  render() {
    return (
      <div className="container">
        <h2 className="text-center mt-4">Danh sách sản phẩm</h2>
        <div
          style={{ cursor: "pointer" }}
          className="text-right "
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng<span>(0)</span> <i className="fa fa-cart-arrow-down"></i>
        </div>
        <ProductList />
        <GioHangRedux />
      </div>
    );
  }
}
