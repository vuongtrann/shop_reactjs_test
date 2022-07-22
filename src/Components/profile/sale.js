import React, { Component, useEffect, useState } from "react";

import './main copy.css'
import './grid copy.css'
import DonHang from "./donhang";
import API from "../../API";
import Menu from "./menu";
import MenuItem from "./menuItem";
const Sale =(props)=>{
    let email=sessionStorage.getItem('email');
    const [success, setSuccess]= useState({show: false, state: null, message: ""});
    const [donhang,setDonHang]=useState();
    const [searchTerm, setSearchTerm] = useState(0);
    const [flag,setflag]=useState();
       useEffect(()=>{
       
		
        API.getOrderEmail(email).then((res)=>{
            if(res.data.success){
                setDonHang(res.data.result)
            }
        }) 
        setflag(1);
    },[searchTerm]);
     
const onActive=(value)=>{
    setflag(value);
    let trangthai='';
 
    if(value==1){
        API.getOrderEmail(email).then((res)=>{
            if(res.data.success){
                setDonHang(res.data.result)
            }else{
                setDonHang(false)
            }
        }) 
    }

    if(value==2){
        trangthai='Chờ xác nhận';
        const data={trangthai:trangthai,email:email}
        API.getOrderTrangThai(data).then((res)=>{
            if(res.data.success){
                
                setDonHang(res.data.result)
            }else{
                setDonHang(false)
            }
        }) 
    }
    if(value==3){
        trangthai='Chờ lấy hàng';
        const data={trangthai:trangthai,email:email}
        API.getOrderTrangThai(data).then((res)=>{
            if(res.data.success){
                
                setDonHang(res.data.result)
            }else{
                setDonHang(false)
            }
        }) 
    }
    if(value==4){
        trangthai='Đang giao';
        const data={trangthai:trangthai,email:email}
        API.getOrderTrangThai(data).then((res)=>{
            if(res.data.success){
              
                setDonHang(res.data.result)
            }else{
                setDonHang(false)
            }
        }) 
      
    }
    if(value==5){
        trangthai='Đã giao';
        const data={trangthai:trangthai,email:email}
        API.getOrderTrangThai(data).then((res)=>{
            if(res.data.success){
                
                setDonHang(res.data.result)
            }else{
                setDonHang(false)
            }
        }) 
    }
    if(value==6){
        trangthai='Đã hủy';
        const data={trangthai:trangthai,email:email}
        API.getOrderTrangThai(data).then((res)=>{
            if(res.data.success){
                
                setDonHang(res.data.result)
            }else{
                setDonHang(false)
            }
        }) 
    }
   
   
}
console.log(donhang);

       if(donhang){
        return(
            <>
            <div class="col l-10 ">
                   <div class="follow">
                   <MenuItem
                    onClick={onActive}
                    active={flag}
                   >
                   </MenuItem>
                    <div class="search">
                        <div href="" class="search__icon-link">
                            <i class="search__icon fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input type="text" class="search__input" placeholder="Tìm kiếm theo Tên Shop..."/>
                    </div>
                    {
                        donhang&&donhang.map((item,index)=>{
                            return <DonHang
                            key={index}
                            donhang={item}
                            active={flag}
                            >

                            </DonHang>
                        })
                    }
                   
                   </div>
                </div>

            </>
        )
       }
       else{
        return(
            <>
             <div class="col l-10 ">
                   <div class="follow">
                   <MenuItem
                    onClick={onActive}
                    active={flag}
                   >
                   </MenuItem>
                    <div class="search">
                        <div href="" class="search__icon-link">
                            <i class="search__icon fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input type="text" class="search__input" placeholder="Tìm kiếm theo Tên Shop..."/>
                    </div>
                    <div  className="chuathongbao">
                    <div className="thongbao2">
                        <img src="https://theme.hstatic.net/1000360022/1000651995/14/replace-icon.png?v=1306"/>
                        <p>Không có đơn hàng nào</p>
                    </div>
                        
                     </div>
                 
                   </div>
                </div>
         
            </>
        )
       }
    
}
export default Sale;