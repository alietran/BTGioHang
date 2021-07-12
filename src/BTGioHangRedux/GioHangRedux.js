import React, { Component } from "react";
import { connect } from "react-redux";
//import BTGioHangReducer from "../redux/BTGioHangReducer";
class GioHangRedux extends Component {
  render() {
    return (
      <div>
        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog"
            style={{ minWidth: 800 }}
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <td>Mã</td>
                      <td>Hình</td>
                      <td>Tên</td>
                      <td>Giá</td>
                      <td>Số lượng</td>
                      <td>Thành tiền</td>

                      <td></td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.gioHang.map((sp, index) => {
                      return (
                        <tr key={index}>
                          <td>{sp.ma}</td>
                          <td>
                            <img
                              style={{ width: 100, height: 100 }}
                              src={sp.hAnh}
                              alt={sp.ten}
                            />
                          </td>
                          <td>{sp.ten}</td>
                          <td>{sp.gia}</td>
                          <td>{sp.sl}</td>
                          <td>
                            {(sp.gia * sp.sl).toLocaleString()}
                          </td>
                          <td><button onClick={() => {this.props.xoaGH(sp.ma)}} className="btn btn-danger">Xóa</button></td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    gioHang: state.BTGioHangReducer.gH,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGH : (maSP) =>{
      let action = {
        type: 'XOA_SP',
        maSP
      }
      dispatch(action)
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
