import React,{Component, useEffect, useState} from 'react'
import './header.css'
import './search.css'
import {
    Link
  }from "react-router-dom";
import API from '../../API';
import HeaderUser from './headUser';

const Header =()=>{
    let email=sessionStorage.getItem('email');
    const [user,setUser]=useState();
	const [searchTerm, setSearchTerm] = useState(0);
 
	useEffect(()=>{
        API.getUserEmail(email).then((res)=>{
            if(res.data.success){
                setUser(res.data.result)
            }
        }) 
		
      
    },[searchTerm]);


 
   if(user){
    return(
        <HeaderUser 
        user={user}
        
        >

        </HeaderUser>
           
      );
   }else
   {
    return(
        <div class="header">
        <div class="container">
                <div class="head">
                    <div class=" logo">
                        <a href="/"><img src="image/logo2.png"/></a>	
                    </div>
                </div>
            </div>
            <div class="header-top">
                <div class="container">
                <div class="col-sm-5 col-md-offset-2  header-login">
                            <ul >
                                <li><a href="/login">Đăng nhập</a></li>
                                <li><a href="/register">Đăng ký</a></li>
                                <li><a href="/checkout">Giỏ hàng</a></li>
                            </ul>
                        </div>
                        
                    <div class="col-sm-5 header-social">		
                            <ul >
                                <li><a href="#"><i></i></a></li>
                                <li><a href="#"><i class="ic1"></i></a></li>
                                <li><a href="#"><i class="ic2"></i></a></li>
                                <li><a href="#"><i class="ic3"></i></a></li>
                                <li><a href="#"><i class="ic4"></i></a></li>
                            </ul>
                            
                    </div>
                        <div class="clearfix"> </div>
                </div>
                </div>
                
                <div class="container">
                
                    <div class="head-top">
                    
                 <div class="col-sm-8 col-md-offset-2 h_menu4">
                        <nav class="navbar nav_bottom" role="navigation">
         
        
          <div class="navbar-header nav_2">
              <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
             
           </div> 
        
            <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul class="nav navbar-nav nav_1">
                    <li><a class="color" href="/">Trang chủ</a></li>
                    
                    
                    <li><a class="color3" href="/all">Sản phẩm</a></li>
                    <li><a class="color4" href="/all">Giới thiệu</a></li>
      
                    <li ><a class="color6" href="/contact">Liên hệ</a></li>
                    <li>
                    <div class="box">
                    <form class="sbox" action="/search" method="get">
                    <input class="stext " type="text" name="q" placeholder="Tìm kiếm sản phẩm..."/>
                    <a class="sbutton" type="submit" href="javascript:void(0);">
                    <i class="glyphicon glyphicon-search"></i>
                    </a>
                    </form>
                    </div>
                    </li>
                </ul>
             </div>
        
        </nav>
                    </div>
                    <div class="col-sm-2 search-right">
                        <ul class="heart">

                        
                        <li>
                        <a href="wishlist.html" >
                        <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>
                        </a></li>
                        <li>
                            {/* <a class="play-icon popup-with-zoom-anim" href="#small-dialog"><i class="glyphicon glyphicon-search"> </i></a> */}
                            
                        </li>
                        <li>
                        <a href="/checkout">
                               <div class="total">
                                    </div>
                                    <img src="images/cart.png" alt=""/>
                                </a>
                        </li>
                            </ul>
                            {/* <div class="cart box_1">
                                <a href="/checkout">
                                <h3> <div class="total">
                                    </div>
                                    <img src="images/cart.png" alt=""/></h3>
                                </a>
                              
        
                            </div> */}
                            <div class="clearfix"> </div>
                            
                            
                                          
                    <link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all"/>
                    <script src="js/jquery.magnific-popup.js" type="text/javascript"></script>
        
                    <div id="small-dialog" class="mfp-hide">
					<div class="search-top">
						<div class="login-search">
							<input type="submit" value=""/>
							<input type="text" value="Search.." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search..';}"/>		
						</div>
						<p>Shopin</p>
					</div>				
				</div>
                        
                    </div>
                    <div class="clearfix"></div>
                </div>	
            </div>	
        </div>
           
      );
   }
}
export default Header;