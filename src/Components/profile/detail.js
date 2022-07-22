import React, { Component } from "react";
import { domain } from "../../constant";
class Detail extends Component{
    
    render(){

      
        const image = JSON.parse(this.props.detail.image);

        return(
            <>
            <div class="product__item">
                                    <div class="product__introduce">
                                        <img src={domain+"/"+image.images[0]} alt="" class="product__img"/>
                                        <div class="product__content">
                                            <h3 class="product__name">[Mã SKAMPUSH11 giảm 10% đơn 200k] {this.props.detail.namProduct}</h3>
                                            <p class="product__type">Phân loại hàng: {this.props.detail.size}</p>
                                            <p class="product__quantity">Số lượng : {this.props.detail.soluong}</p>
                                        </div>
                                    </div>
                                    <div class="product__price">
                                        <span class="product__price-old">{this.props.detail.priceOld},000</span>
                                        <span class="product__price-new">₫{this.props.detail.priceNew},000</span>
                                    </div>
                                </div>
            </>
        )
    }
}
export default Detail;