import React, { Component } from "react";

class Detail extends Component{
    render(){
        return(
            <>
              <div class="product__total-all">
                     <span class="product__all">{this.props.hoadon.namProduct}  x{this.props.hoadon.soluong}</span>
                     <span class="total__all">{this.props.hoadon.gia * this.props.hoadon.soluong }.000 đ</span>
                  </div>
            </>
        )
    }
}
export default Detail