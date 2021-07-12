import React, { Component } from 'react'
import dataphone from "../Data/dataPhone.json";
import ProductItem from './ProductItem';
export default class ProductList extends Component {
  mangDT = dataphone;

 

  renderSP = () => {
    return this.mangDT.map((sanpham, index) => {
      return (
        <div className="col-4" key={index}>
         <ProductItem product={sanpham}/>
        </div>
      );
    });
  };
  render() {
    return (
      <div>
          <div className="row">{this.renderSP()}</div>
        
      </div>
    );
  }
}
