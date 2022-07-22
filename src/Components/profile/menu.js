import React, { Component } from "react";
import { domain } from "../../constant";
class Menu extends Component{
    render(){
        const user=this.props.user;
        let a1,a2,a3,a4;
        console.log(this.props.active)
        let value=this.props.active;
        let img=JSON.parse(user[0].avatar);
        if(value==1)
        {
          a1="myAccount__item-active";
         
        }else if(value==2){
          a2="myAccount__item-active";
          
        }else if(value==3){
          a3="myAccount__item-active";
            
        }else if(value==4){ a4="myAccount__item-active";
        
        }
        
        const onActive=(value)=>{
        this.props.onClick(value);
     

        }
        if(a1!=''){
            return(
                <>
                    <div class="col l-2 ">
                        <div class="category">
                            <div class="category__user">
                                <img src={domain+"/"+img.images[0]} alt="" class="category__img" />
                                <div class="category__information">
                                    <span class="category__name">{user[0].ten}</span>
                                    <div class="category__edit">
                                        <i class="category__icon fa-solid fa-pen"></i>Sửa hồ sơ
                                    </div>
                                </div>
                            </div>
                            <div class="myAccount">
                                <div>
                                    <a class="myAccount__link-list">
                                        <i class="myAccount__icon glyphicon glyphicon-user"></i><span>Tài khoản của tôi</span>
                                    </a>
                                </div>
                                <ul class="myAccount__list">
                                    <li class="myAccount__item ">
                                        <a  class={`myAccount__link  ` + a1}  onClick={() => onActive(1)}>
                                            Hồ sơ
                                        </a>
                                    </li>           
                                   
                                    <li class="myAccount__item">
                                        <a class={`myAccount__link  ` + a2} onClick={() => onActive(2)} >
                                            Đổi mật khẩu
                                        </a>
                                    </li>
                                </ul>
                                <div>
                                    <a  class={`myAccount__link-list  ` + a3}  onClick={() => onActive(3)}>
                                        <i class="myAccount__icon-list glyphicon glyphicon-calendar" ></i><span>Đơn mua</span>
                                    </a>
                                </div>
                                <div>
                                    <a class={`myAccount__link-list  ` + a4} onClick={() => onActive(4)}>
                                        <i class="myAccount__icon-bell glyphicon glyphicon-bell" ></i><span>Thông báo</span>
                                    </a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
    
              </>
            )
        }
    }
}
export default Menu;