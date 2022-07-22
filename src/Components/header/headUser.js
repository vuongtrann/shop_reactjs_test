import React, { Component } from "react";
import { domain } from "../../constant";
class HeaderUser extends Component{
    render(){
        const user=this.props.user;
        console.log(user[0].avatar)
        let img=JSON.parse(user[0].avatar);
        console.log(sessionStorage.getItem('user'))
        const onClick=()=>{
          
            sessionStorage.removeItem('user');
            sessionStorage.removeItem('email');
            window.location='/';
    
        }
        const profile=()=>{
            window.location='/profile';
        }
        return(<>
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
                                <li><a onClick={onClick}>Đăng Xuất</a></li>
                               
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
                            
                        

                        <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                    
                            <img  src={domain+"/"+img.images[0]} class="btn  dropdown-toggle image" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>

                        
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-header text-center">
                                        <img className="img-md rounded-circle image" src={domain+"/"+img.images[0]} />
                                      
                                        <div><p className="mb-1 mt-3 font-weight-semibold">{sessionStorage.getItem('user')}</p></div>
                                        <div> <p className="fw-light text-muted mb-0">{sessionStorage.getItem('email')}</p></div>
                                     
                                    
                                    
                                        <div  id='item' onClick={profile}> <a className="dropdown-item " id='item'><i className="glyphicon glyphicon-user" id='icon'></i> Trang cá nhân <span className="badge badge-pill badge-danger">1</span></a></div>
                                        
                                        
                                       

                                        
                                        <div id='item'onClick={onClick} >  <a className="dropdown-item " id='item' ><i className="glyphicon glyphicon-log-out" id='icon'> </i> Đăng xuất</a></div>

    
                                </div>

                            </div>
                            
                            {/* <div class="cart box_1">
                                <a href="/checkout">
                               
                                    <img src="images/cart.png" alt=""/>
                                </a>
                            

        
                            </div> */}
                 
                      </li>
                      <li>
                      <a href="/checkout">
                               <img src="images/cart.png" alt=""/>
                           </a>
                      </li>
                        
                            </ul>
                            <div>
                                
                            
                            </div>
                       
                            <div class="clearfix"> </div>
                            
                            
                                          
                    <link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all"/>
                    <script src="js/jquery.magnific-popup.js" type="text/javascript"></script>
        
                    <div id="small-dialog" class="mfp-hide">
                        <div class="search-top">
                            <div class="login-search">
                                <input type="submit" value=""/>
                                <input type="text" value="Search.." onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Search..';}"/>		
                            </div>
                     
                        </div>				
                    </div>
                
                        
                    </div>
                    <div class="clearfix"></div>
                </div>	
            </div>	
        </div>
        </>)
    }
}
export default HeaderUser;