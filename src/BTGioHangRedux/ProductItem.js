import React, { Component } from 'react'
import { connect } from 'react-redux';
class ProsuctItem extends Component {
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
                <button onClick={() => {}} className="btn btn-success">Thêm giỏ hàng</button>
              </div>
            </div>
          </div>
        );
    }
}

const 

export default connect()(ProsuctItem);