import React, { Component } from "react";
import GioHangRedux from "./GioHangRedux";
import ProductList from "./ProductList";
import { connect } from "react-redux";
 class BTGioHangRedux extends Component {
   renderSL = () => {
     return this.props.gioHang.reduce((tongSL,gHang,index) => {
      return (tongSL += gHang.sl);
     },0)
   }

   render() {
     return (
       <div className="container">
         <h2 className="text-center mt-4">Danh sách sản phẩm</h2>
         <div
           style={{ cursor: "pointer" }}
           className="text-right mb-3"
           data-toggle="modal"
           data-target="#modelId"
         >
           Giỏ hàng<span>({this.renderSL()})</span>
           <i className="fa fa-cart-arrow-down"></i>
         </div>
         <ProductList />
         <GioHangRedux />
       </div>
     );
   }
 }

const mapStateToProps = state =>{
  return {
    gioHang: state.BTGioHangReducer.gH,
  
  }
}
export default connect(mapStateToProps)(BTGioHangRedux);
