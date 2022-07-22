import React, { Component, useState } from "react";
import API from "../../API";
import { domain } from "../../constant";

const Content=(props)=> {
      const user=props.user;
      let email=sessionStorage.getItem('email');
      const [success, setSuccess]= useState({show: false, state: null, message: ""});
        let img=JSON.parse(user[0].avatar);
     
        const change=()=>{
           
            let name=document.getElementById('name').value != '' ? document.getElementById('name').value : user[0].ten;
            console.log('aa')
            let address=document.getElementById('address').value != '' ? document.getElementById('address').value : user[0].diachi;
            let phone=document.getElementById('phone').value != '' ? document.getElementById('phone').value : user[0].dienthoai;
        	let flag=true;
       
		  if(phone != ''){
					if(isNaN(phone)===true){
						flag=false;
						alert("Phone must be a number")
                       
				}
			
		}
        if(flag){
            var data={ten:name,diachi:address,phone:phone,email:email}
            console.log(data)
            API.updateUser(data).then((res)=>{
                alert(res.data.message );
                setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
            })
            window.location='/profile';	
        }
    }
        return(
            <>
            
            <div class="col l-10 ">
                    <div class="formClient">
                        <div class="formClient__content">
                            <p class="formClient__file-content">Hồ sơ của tôi</p>
                            <p class="formClient__manager-content">Quản lí thông tin hồ sơ để bảo mật tài khoản</p>
                        </div>
                        <div class="roww form__infor">
                            <div class="col l-8">
                               <form action="" class="form__user">
                                    <div class="login1">
                                        <p class="login__text">Tên đăng nhập  </p>
                                        <input type="text" name="" id="name" class="login__input-text" placeholder={user[0].ten}/>
                                     
                                    </div>
                                    <div class="name">
                                        <p class="name__text">Email</p>
                                        <input type="text" name="" id="email"  class="login__input-text" value={user[0].email} readOnly/>
                                    </div>
                                    <div class="email">
                                        <p class="email__add">Địa chỉ</p>
                                        <input type="text" name="" id="address" class="login__input-text" placeholder={user[0].diachi}/>
                                    </div>
                                    <div class="phone">
                                        <p class="phone__change">Số điện thoại</p>
                                        <input type="text" name="" id="phone" class="login__input-text" placeholder={user[0].dienthoai}/>
                                    </div>
                                  
                               
                                    <a onClick={change} class="link__save">Lưu</a>
                               </form>
                            </div>
                            <div class="col l-4">
                                <div class="myImg">
                                    <img src={domain+"/"+img.images[0]} alt="" class="myImg__show"/>
                                    <a href="" class="myImg__link">Chọn ảnh</a>
                                    <p class="myImg__contetn">Dung lượng file tối đa 1 MB</p>
                                    <p class="myImg__contetn">Định dạng: .JPEG, .PNG</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    
}

export default Content;