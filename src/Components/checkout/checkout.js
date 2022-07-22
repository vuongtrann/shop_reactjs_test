import React, {Component, useEffect, useState } from "react";
import { ReactDOM } from "react";
import { useParams,Link } from "react-router-dom";
import API from "../../API";
import Product from "../../detail/product";
import Item from "./item";
const CheckOut=()=>{
	let email;
	if(sessionStorage.getItem('email')){
		email=sessionStorage.getItem('email');

	}else{
		email="customer";
	}
	 console.log(email);
	const [cart,setCart]=useState();
	const [kho,setKho]=useState();
    const [searchTerm, setSearchTerm] = useState(0);
	useEffect(()=>{
        API.getCart(email).then((res)=>{
            if(res.data.success){
                setCart(res.data.result)
            }
        })
		API.getWarehouse(searchTerm).then((res)=>{
			if(res.data.success){
			
					setKho(res.data.result);
				}
			}
		)
    },email);
console.log(cart)

	const onClick=()=>{
		let pay=true;
		console.log(kho[2].soluong,cart[0].soluong,kho[2].idProduct,cart[0].idProduct,kho.length,cart.length)
	
		for(let i=0;i<kho.length;i++){
		
			for(let j=0;j<cart.length;j++){
		
					if(cart[j].idProduct == kho[i].idProduct && cart[j].soluong > kho[i].soluong){
						pay=false;
						alert("Số lượng sản phẩm " + kho[i].namProduct +" chỉ còn " + kho[i].soluong);

	
					}
				}
		  }
		if(pay){
			window.location='/pay'
		}
	}
	return(
		<>
		<div class="banner-top">
<div class="container">
	<h1>Giỏ hàng</h1>
	<em></em>
	<h2><a href="/">Trang chủ</a><label>/</label>Giỏ hàng</h2>
</div>
</div>
		<div class="check-out">
<div class="container">

<div class="bs-example4" data-example-id="simple-responsive-table">
<div class="table-responsive">
		<table class="table-heading simpleCart_shelfItem">
	  <tr>
		<th class="table-grid">Sản Phẩm</th>
				
		<th>Số Lượng</th>
		<th >Size</th>
		<th >Giá Tiền</th>
		<th>Tổng tiền</th>
	  </tr>
	  {
		  cart&&cart.map((item,index)=>{
			  return <Item
			  key={item.masp}
			  props={item}
			  >

			  </Item>
		  })
	  }
	  
</table>
</div>
</div>
<div class="produced">
<div  class="hvr-skew-backward" onClick={onClick}>Mua hàng</div>
 </div>
</div>
</div>


	<div class="container">
		<div class="brand">
			<div class="col-md-3 brand-grid">
				<img src="images/ic.png" class="img-responsive" alt=""/>
			</div>
			<div class="col-md-3 brand-grid">
				<img src="images/ic1.png" class="img-responsive" alt=""/>
			</div>
			<div class="col-md-3 brand-grid">
				<img src="images/ic2.png" class="img-responsive" alt=""/>
			</div>
			<div class="col-md-3 brand-grid">
				<img src="images/ic3.png" class="img-responsive" alt=""/>
			</div>
			<div class="clearfix"></div>
		</div>
		</div>
		</>
	);
}
export default CheckOut;