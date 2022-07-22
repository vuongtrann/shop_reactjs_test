import React, { useEffect, useState } from "react";
import API from "../../API";

const ChangePass=(props)=>{
    let email=sessionStorage.getItem('email');

    const [success, setSuccess]= useState({show: false, state: null, message: ""});
  

    const onChangePass=()=>{
        let passOld= document.getElementById('passOld').value;
        let passNew= document.getElementById('passNew').value;
        let RePass= document.getElementById('RePass').value;
        let flag=true;
        if(passNew==''||passOld==''||RePass=='')
        {
            alert('Không được để trống')
            flag=false;
        }
        if(props.user[0].matkhau != passOld)
        {
            alert('Mật khẩu cũ không đúng')
            flag=false;
        }
        if(props.user[0].matkhau == passNew)
        {
            alert('Mật Khẩu mới đã bị trùng với mật khẩu cũ')
            flag=false;
        }
        if(passNew!=RePass)
        {
            alert('Mật khẩu nhập lại không trùng nhau')
            flag=false;
        }
    
       if(flag)
       {
          var data={matkhau:passNew,email:email};
          API.updatePass(data).then((res)=>{
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
                            <p class="formClient__manager-content">Thay đổi mật khẩu</p>
                        </div>
                        <div class="roww form__infor">
                            <div class="col l-12">
                               <form action="" class="form__user">
                                    <div class="login1">
                                        <p class=" margin" >Mật khẩu cũ  </p>
                                        <input type="password" name="" id="passOld" class="login__input-text" placeholder=''/>
                                     
                                    </div>
                                    <div class="name">
                                        <p class=" margin">Mật khẩu mới </p>
                                        <input type="password" name="" id="passNew" class="login__input-text" placeholder=''/>
                                    </div>
                                    <div class="name">
                                        <p class="login__text1 ">Nhập lại mật khẩu mới</p>
                                        <input type="password" name="" id="RePass" class="login__input-text" placeholder=''/>
                                    </div>
                                   
                                 
                               
                                    <a onClick={onChangePass} class="link__save">Lưu</a>
                               </form>
                            </div>
                           
                        </div>
                    </div>
                </div>
        </>
    )
}
export default ChangePass;