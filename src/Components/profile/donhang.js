import React, { useEffect, useState } from "react";
import API from "../../API";
import Detail from "./detail";


const DonHang =(props)=>{
    const [flag,setflag]=useState();
    let email=props.donhang.mahd;
	const [searchTerm, setSearchTerm] = useState(0);
 

    useEffect(()=>{
        API. getOrderDetail(email).then((res)=>{
            if(res.data.success){
                setflag(res.data.result)
            }
        }) 
        
    },[props.donhang]);
  
    console.log(flag)
    let price=0;
    flag&&flag.map((item,index)=>{
       return price = price + item.gia*item.soluong;
    })
    return(
        <>
        <div class="price">
                        <div class="product">
                            <div class="manipulation">
                                <div class="manipulation__menu">
                                    <p class="manipulation__favorite">Yêu thích+</p>
                                    <p class="manipulation__content">Outerity</p>
                                    <a href="" class="manipulation__chat-link">
                                        <i class="manipulation__icon-chat glyphicon glyphicon-commentf"></i>
                                        Chat
                                    </a>
                                    <a href="" class="manipulation__show-link">
                                        <i class="manipulation__icon-house fa-solid fa-house-circle-check"></i>
                                        Xem shop
                                    </a>
                                </div>
    
                                <div class="assess">
                                    <a href="" class="assess__delivery-link">
                                        <i class="fa-solid fa-truck"></i>
                                        Giao hàng thành công
                                    </a>
                                    <i class="assess__icon-question fa-solid fa-circle-question"></i>
                                    <p class="assess__evaluated">{props.donhang.trangthai}</p>
                                </div>
                            </div>
                            <div class="product__list-item">
                                
                                      {
                                        flag&&flag.map((item,index)=>{
                                            return <Detail
                                            key={index}
                                            detail={item}
                                            ></Detail>
                                        })
                                      }
                            </div>
                            
                            
                        </div>
                    </div>
                    <div class="total2">
                        <div class="total__money">
                            <i class="total__icon fa-solid fa-sack-dollar"></i>
                            <span class="total__content">Tổng số tiền:</span>
                            <span class="total__price">₫{price}.000</span>
                        </div>
                        <div class="total__btn">
                            <span class="total__btn-content">Không nhận được đánh giá</span>
                            <div class="total__btn-all">
                                <button class="total__btn-buy">Mua lại</button>
                                <button class="total__btn-contact">Liên hệ người bán</button>
                                <button class="total__btn-see">Xem đánh giá shop</button>
                                
                            </div>
                        </div>
                    </div>
        </>
    )
}
export default DonHang;