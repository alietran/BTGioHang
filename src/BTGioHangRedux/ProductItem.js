import React, { Component } from "react";
import { connect } from "react-redux";
class ProductItem extends Component {
  render() {
    let { product } = this.props;

    return (
      <div>
        <div className="card text-center ml-5">
          <img
            style={{ width: 300, height: 300 }}
            className="card-img-top"
            src={product.hinhAnh}
            alt={product.tenSP}
          />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <p className="card-text">{product.giaBan.toLocaleString()}</p>
            <button onClick={() => {this.props.themsp(product)}} className="btn btn-success">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themsp: (sp) => {
      let spGH = {
        ma: sp.maSP,
        ten: sp.tenSP,
        hAnh: sp.hinhAnh,
        sl: 1,
        gia: sp.giaBan,
      };
     let action = {
       type: 'THEM_SP',
       spGH
     }
     dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
