import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../API";
import Detail from "./detail";
import './momo.css'

const Momo=()=>{
    let mahd=useParams();
    const [hoadon,setHoaDon]=useState([]);
    const [searchTerm, setSearchTerm] = useState(0);
    useEffect(()=>{
       
        API.getHoadon(mahd.mahd).then((res)=>{
            if(res.data.success){
                setHoaDon(res.data.result)
            }
        })
		
    },searchTerm);
console.log(mahd.mahd,hoadon)
let gia=0;
let n=0
for(let i=0;i<hoadon.length;i++)
  {
    n++
    gia=gia+ hoadon[i].gia*hoadon[i].soluong;
  }
if(hoadon.length>0){
    return(
        <>
         <div class="container main">
     <div class="grid__system-12">
         <div class="row__system-12">
             <div class="comlumn__system-12">
                 <span class="header__content">Nội dung chuyển khoản</span>
             </div>   
         </div>
         <div class="row__system-12">
             <div class="comlumn__system-4">
                 <div class="qr__momo">
                     <p class="open__content-momo">Mở ứng dụng Momo và quét mã QR code bên dưới:</p>
                     <img src="./images/QRcode.png" alt="" class="img__qr-momo"/>
                     <p class="message__content-momo">Nhập lời nhắn cho người nhận là: {mahd.mahd}</p>
                 </div>
             </div>
             <div class="comlumn__system-4 test">
                 <div> <img src="./images/logo2.png" alt="" class="img_avata"/></div>
                 <div className="m"><p>Tên momo nhận : Nguyễn Quang Thông</p></div>
                 <div className="m"><p>Số điện thoại shop : 0339647045</p></div>
                 
             </div>
             <div class="comlumn__system-4">
                 <div class="pading__ledt__right">
                     <div class="confirm">
                         <p class="confirm__message">Cảm ơn bạn. Đơn hàng của bạn đã được nhận</p>
                         <ul class="confirm__list">
                             <li class="confirm__item">Mã đơn hàng: <span>{mahd.mahd}</span></li>
                             <li class="confirm__item">Ngày: <span>{hoadon[0].ngayhd}</span></li> 
                             <li class="confirm__item">Email: <span>{hoadon[0].email}</span></li> 
                             <li class="confirm__item">Tổng cộng: <span> {gia}.000 đ</span></li>
                             <li class="confirm__item">Phương thức thanh toán: <span>Thanh toán qua ví Momo</span></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
         <div class="row__system-12">
             <div class="comlumn__system-8">
                <div class="order__details">
                  <div class="order__details-content">Chi tiết đơn hàng</div>
                  <div class="product__total-all boder__total-all">
                     <span class="product__all">SẢN PHẨM</span>
                     <span class="total__all">TỔNG</span>
                  </div>
                 {
                    hoadon&&hoadon.map((item,index)=>{
                        return <Detail 
                        key={index}
                        hoadon={item}
                        >
       
                        </Detail>
                    })
                 }
                  <div class="product__total-all">
                     <span class="product__all">Tiền ship :</span>
                     <span class="total__all">{n*10}.000 đ</span>
                  </div>
              
                 
                  <div class="product__total-all">
                     <span class="product__all">Phương thức thanh toán:</span>
                     <span class="total__all">Thanh toán qua ví MoMo</span>
                  </div>
                  <div class="product__total-all">
                     <span class="product__all">Tổng cộng</span>
                     <span class="total__all">{gia + n*10}.000 đ</span>
                  </div>
                </div>
             </div>
             <div class="comlumn__system-4">
                 <img src="./images/logo2.png" alt="" class="img__logo"/>
             </div>
         </div>
     </div>
 </div>
        </>
 )
}
else{
    return(

        <>
        </>
    )
}
   

}
export default Momo;