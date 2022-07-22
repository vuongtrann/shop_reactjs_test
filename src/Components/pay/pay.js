import React,{Component, useEffect, useState} from "react";
import API from "../../API";
import './pay.css';

const Pay=()=>{
	const [success, setSuccess]= useState({show: false, state: null, message: ""});
	const [cart, setCart]= useState();
	const [user,setUser]=useState();
	const [kho,setKho]=useState();
    const [searchTerm, setSearchTerm] = useState(0);
	let emailcart;
	let sl=0;
	let tongtien=0;
	let fee=0;
	if(sessionStorage.getItem('email')){
		emailcart=sessionStorage.getItem('email');

	}else{
		emailcart="customer";
	}
	useEffect(()=>{
        API.getCart(emailcart).then((res)=>{
            if(res.data.success){
                setCart(res.data.result)
            }
        })
		if(emailcart !== 'customer'){
			API.getUserEmail(emailcart).then((res)=>{
				if(res.data.success){
					setUser(res.data.result[0])
				}
			})
		}
		API.getWarehouse(searchTerm).then((res)=>{
			if(res.data.success){
			
					setKho(res.data.result);
				}
			}
		)
    },emailcart);

	
	if(cart){
		
	for(let i=0;i<cart.length;i++){
		tongtien=tongtien+(cart[i].gia*cart[i].soluong);
      sl=sl+1;
	}
	if(sl>5){
		fee=50;
	}
	else{
		fee=sl*10
	}

	}
function generateID(length){
    const az= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    var id= "";
    for(let i=0;i<length;i++){
        var index= Math.floor(Math.random()* 63);
        id+=az[index]
    }
    return id;
}
   
	
    const onClick=()=>{
	
		let name=document.getElementById('name').value;
		let email=document.getElementById('email').value;
		let address=document.getElementById('address').value;
		let phone=document.getElementById('phone').value;
		let mahd=email+generateID(6);
		let flag=true
		let trangthai="Chờ xác nhận";
		var thanhtoan='thanhtoan'
		var checkbox = document.getElementsByName("rad");
                for (var i = 0; i < checkbox.length; i++){
                    if (checkbox[i].checked === true){
                        thanhtoan=checkbox[i].value;
                    }
                }
				console.log(thanhtoan); 
		if(name===''||email===''||address===''||phone===''){
			flag=false;
			alert("Field can't be left blank")
			
		}
		if(email.search("@")<0){
			flag=false;
			alert('Email must have @ sign ')
	  }
	  if(isNaN(phone)==true){
		flag=false;
		alert("Phone must be a number")
  }
	  
		if(flag){
			var today = new Date();
		var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateStart = date+' '+time;
		today.setDate(today.getDate() + 7);
		var datet = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
		var dateend=datet;
		

		var data={mahd:mahd,email:email,address:address,phone:phone,name:name,dateStart:dateStart,dateend:dateend,trangthai:trangthai,thanhtoan:thanhtoan};
	
		API.addOrder(data).then((res)=>{
			setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
		})
		for(let i=0;i<cart.length;i++){
			var dataDetail={mahd:mahd,idProduct:cart[i].idProduct,soluong:cart[i].soluong,gia:cart[i].gia,size:cart[i].size}
		
			API.addDetail(dataDetail).then((res)=>{
				setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
			})	
            for(let j=0;j<kho.length;j++){
				if(cart[i].idProduct==kho[j].idProduct){
					let sl=kho[j].soluong-cart[i].soluong;
					const data= {id:cart[i].idProduct,soluong:sl};
					API.UpdateEnterStock(data).then((res)=>{
						
				  
						setSuccess({...success, show: true, state: res.data.success, message:res.data.message })
					 
					   
					   
					})  
				}
			}

			}
		if(success){
			alert("Lập hóa dơn thành công");
			API.deleteCartPig(emailcart).then((res)=>{
				setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
			})
			if(thanhtoan=='thanhtoan')
			{
				window.location="/";
			}
			if(thanhtoan=='momo')
			{
				window.location=`/momo`+mahd;
			}
			if(thanhtoan=='banking')
			{
				window.location="/";
			}
		}
		}		

	}
	const onClickChange=()=>{
		let name=document.getElementById('name').value != '' ? document.getElementById('name').value : user.ten;
		let email=document.getElementById('email').value != '' ? document.getElementById('email').value : user.email;
		let address=document.getElementById('address').value != '' ? document.getElementById('address').value : user.diachi;
		let phone=document.getElementById('phone').value != '' ? document.getElementById('phone').value : user.dienthoai;
		let mahd=email+generateID(6);
		let trangthai="Chờ xác nhận";
		var thanhtoan='thanhtoan'
		var checkbox = document.getElementsByName("rad");
                for (var i = 0; i < checkbox.length; i++){
                    if (checkbox[i].checked === true){
                        thanhtoan=checkbox[i].value;
                    }
                }
				console.log(thanhtoan);
		console.log(name);
		let flag=true
		if(email !==''||phone !==''){
			
						if(email.search("@")<0){
							flag=false;
							alert('Email must have @ sign ')
					}
					if(isNaN(phone)===true){
						flag=false;
						alert("Phone must be a number")
				}
			
		}
		if(flag){
			var today = new Date();
		var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
		var dateStart = date+' '+time;
		today.setDate(today.getDate() + 7);
		var datet = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
		var dateend=datet;

		var data={mahd:mahd,email:email,address:address,phone:phone,name:name,dateStart:dateStart,dateend:dateend,trangthai:trangthai,thanhtoan:thanhtoan};
	
		API.addOrder(data).then((res)=>{
			setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
		})
		for(let i=0;i<cart.length;i++){
			var dataDetail={mahd:mahd,idProduct:cart[i].idProduct,soluong:cart[i].soluong,gia:cart[i].gia,size:cart[i].size}
			console.log(dataDetail);
			API.addDetail(dataDetail).then((res)=>{
				setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
			})

			for(let j=0;j<kho.length;j++){
				if(cart[i].idProduct==kho[j].idProduct){
					let sl=kho[j].soluong-cart[i].soluong;
					const data= {id:cart[i].idProduct,soluong:sl};
					API.UpdateEnterStock(data).then((res)=>{
						
				  
						setSuccess({...success, show: true, state: res.data.success, message:res.data.message })
					 
					   
					   
					})  
				}
			}
		}
		if(success){
			alert("Lập hóa dơn thành công");
			API.deleteCartPig(emailcart).then((res)=>{
				setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
			})
			if(thanhtoan=='thanhtoan')
			{
				window.location="/";
			}
			if(thanhtoan=='momo')
			{
				window.location=`/momo`+mahd;
			}
			if(thanhtoan=='banking')
			{
				window.location="/";
			}
			
		
		}
	
		}	
		
		
		
	}
	if(user){
		return(
			<>
			<div class="banner-top">
	<div class="container">
		<h1>Pay</h1>
		<em></em>
		<h2><a href="/">Home</a><label>/</label>Pay</h2>
	</div>
	</div>
			  <div className="container">
			  <div class="col-md-6 login-do">
					<h3>Thông tin giao hàng</h3>
					<br></br>
					<h5>Tên</h5>
					<div class="login-mail">
					
						
						<input type="text" placeholder={user.ten} id="name" />
						<i  class="glyphicon glyphicon-user"></i>
					</div>
					<h5>Email</h5>
					<div class="login-mail">
					
						
						<input type="text" placeholder={user.email} id="email" />
						<i  class="glyphicon glyphicon-envelope"></i>
					</div>
					<h5>Địa chỉ</h5>
					<div class="login-mail">
					
						
						<input type="text" placeholder={user.diachi} id="address"/>
						<i  class="glyphicon glyphicon-map-marker"></i>
					</div>
					<h5>Số điện thoại</h5>
					<div class="login-mail">
					
						
						<input type="text" placeholder={user.dienthoai} id="phone" />
						<i  class="glyphicon glyphicon-phone"></i>
					</div>
					   
					
				</div>
				<div class="col-md-6 login-right">
					 <h3>Thông tin đơn hàng</h3>
					<br></br>
				
					<div class="t">
						<label><pre> Tạm tính ( {sl} Sãn phẩm)          {tongtien} ,000đ</pre></label>
					</div>
					<div class="t">
						<label><pre> Phí Giao hàng                   {fee},000đ</pre></label>
					</div>
					<div class="t">
						<label><pre> Tổng cộng                        {tongtien+fee},000đ</pre></label>
					</div>

					<div className="row" >
					   <h4>	Phương thức thanh toán: </h4>

						<div>
						<ul class="logos_tiendas_mobile">
						<li className="grupo1 "  id="id_tienda_url_mob_1"><input type="radio" name="rad"  checked value="thanhtoan"/>  Thanh toán khi nhận hàng</li>
                <li className="grupo1 "  id="id_tienda_url_mob_1"><input type="radio" name="rad" value="momo" className="radio1"/> <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/07/Vi%CC%81-MOMO.jpg" class="logodiveinn_mobile momo" alt="diveinn" /></li>
				<li className="grupo1 "  id="id_tienda_url_mob_1"><input type="radio" name="rad" value="banking"/> <img src="https://www.bidv.com.vn/wps/wcm/connect/2d8ca582-5cce-43a8-84e4-d45a8a4d93a9/ngan-hang-dien-tu-la-gi.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2d8ca582-5cce-43a8-84e4-d45a8a4d93a9-o0MAuVc" class="logodiveinn_mobile momo" alt="diveinn" /></li>

               
            </ul>
						</div>
						
						
					</div>
	
				</div>
			  </div>
				
				<div class="clearfix"> </div>
				<div class="produced">
				<input type="submit" value="Thanh toán" class="hvr-skew-backward" onClick={onClickChange}/>
		 </div>
			</>
		)
	}
	else{
		return(
			<>
			<div class="banner-top">
		
	<div class="container">
		<h1>Pay</h1>
		<em></em>
		<h2><a href="/">Home</a><label>/</label>Pay</h2>
	</div>
	</div>
			  <div className="container">
			  <div class="col-md-6 login-do">
					<h3>Thông tin giao hàng</h3>
					<br></br>
				
					<h5>Tên</h5>
					<div class="login-mail">
					
						
						<input type="text" placeholder="Họ tên" id="name" />
						<i  class="glyphicon glyphicon-user"></i>
					</div>
					<h5>Email</h5>
					<div class="login-mail">
					
						
						<input type="text" placeholder="Email" id="email" />
						<i  class="glyphicon glyphicon-envelope"></i>
					</div>
					<h5>Địa chỉ</h5>
					<div class="login-mail">
					
						
						<input type="text" placeholder="Địa chỉ" id="address"/>
						<i  class="glyphicon glyphicon-map-marker"></i>
					</div>
					<h5>Số điện thoại</h5>
					<div class="login-mail">
					
						
						<input type="text" placeholder="Số điện thoại" id="phone" />
						<i  class="glyphicon glyphicon-phone"></i>
					</div>
					   
					
				</div>
				<div class="col-md-6 login-right">
					 <h3>Thông tin đơn hàng</h3>
					<br></br>
				
					<div class="t">
						<label><pre> Tạm tính ( {sl} Sãn phẩm)          {tongtien} ,000đ</pre></label>
					</div>
					<div class="t">
						<label><pre> Phí Giao hàng                   {fee},000đ</pre></label>
					</div>
					<div class="t">
						<label><pre> Tổng cộng                        {tongtien+fee},000đ</pre></label>
					</div>
					<div className="row" >
					   <h4>	Phương thức thanh toán: </h4>

						<div>
						<ul class="logos_tiendas_mobile">
						<li className="grupo1 "  id="id_tienda_url_mob_1"><input type="radio" name="rad" checked value="thanhtoan"/>  Thanh toán khi nhận hàng</li>
                <li className="grupo1 "  id="id_tienda_url_mob_1"><input type="radio" name="rad" value="momo" className="radio1"/> <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2021/07/Vi%CC%81-MOMO.jpg" class="logodiveinn_mobile momo" alt="diveinn" /></li>
				<li className="grupo1 "  id="id_tienda_url_mob_1"><input type="radio" name="rad" value="banking"/> <img src="https://www.bidv.com.vn/wps/wcm/connect/2d8ca582-5cce-43a8-84e4-d45a8a4d93a9/ngan-hang-dien-tu-la-gi.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-2d8ca582-5cce-43a8-84e4-d45a8a4d93a9-o0MAuVc" class="logodiveinn_mobile momo" alt="diveinn" /></li>

               
            </ul>
						</div>
						
						
					</div>
				</div>
			  </div>
				
				<div class="clearfix"> </div>
				<div class="produced">
		<input type="submit" value="Thanh toán" class="hvr-skew-backward" onClick={onClick}/>
		</div>
			</>
		)
	}
   
}
export default  Pay;