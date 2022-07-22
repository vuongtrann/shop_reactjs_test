import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { useParams,Link } from "react-router-dom";

import API from "../../API";
import Option from "../../detail/option";

import { domain } from "../../constant";
const Edit=({})=>{
    const mant= useParams();
    const [info, setInfo]= useState();
    const [size,setSize] =useState();
    const [searchTerm, setSearchTerm] = useState(0);
    const [success, setSuccess]= useState({show: false, state: null, message: ""});
    let itemData={};
 
 console.log(mant.id);
 let email;
	if(sessionStorage.getItem('email')){
		email=sessionStorage.getItem('email');

	}else{
		email="customer";
	}
	 console.log(email);
    let data={email:email};
    useEffect(()=>{
        API.getCartId(data,mant.id).then((res)=>{
            if(res.data.success){
                setInfo(res.data.result[0])
            }
        })
        window.scrollTo(0, 0)
    },[mant]);
    console.log(info);
    useEffect(()=>{
        API.getSize(searchTerm).then((res=>{
            if(res.data.success){
                setSize(res.data.result);
            }
        }));
       
    },[searchTerm]);
 
 


    if(!info){
        return <div>Khoong co data</div>
    }
    let n=1;
    const onClickAdd=()=>{
      
        let a=new Number(document.getElementById("sl").innerHTML);
        document.getElementById("sl").innerHTML=a+1;
        n=a+1;
        
    }
    const onClickDel=()=>{
        let a=new Number(document.getElementById("sl").innerHTML);
        if(a>1)
        {
            document.getElementById("sl").innerHTML=a-1;
            n=a-1;
        }
        
       
    }
    let z="S";
   
   
    const addCart =()=>{
     
        let z="S";
        let b=new Number(document.getElementById("size").value);
        if(b==2){
            z="M";
        }
        else if(b==3){
            z="L"
        }else if(b==4){
            z="XL"
        }
        const data= new FormData();
        let sl=new Number(document.getElementById("sl").innerHTML);
        itemData={idProduct:info.idProduct,soluong:sl,size:z,email:email};
        console.log(itemData);
        API.updateCart(itemData).then((res)=>{
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
        })
        if(success){
            alert("Update giỏ hàng thành công");
        }
    }

var img = JSON.parse(info.image)
    
    return(
        <div className="single">
			

        <div className="container">
        <div className="col-md-10">
            <div className="col-md-6 grid">		
                <div className="flexslider">
                    
                        
                            <div className="row col-md-12"> <img src={domain+"/"+img.images[0]} className="img-responsive" width={400}/> </div>
                            <div className='row col-md-12'>
                            <img src={domain+"/"+img.images[1]} width={190} height={150} className="hinh"/>
                            <img src={domain+"/"+img.images[2]} width={190} height={150}/>

                            </div>
                
                        
                
                </div>
            </div>	
        <div className="col-md-6 single-top-in">
                                <div className="span_2_of_a1 simpleCart_shelfItem">
                        <h3>{info.namProduct}</h3>
                        <p className="in-para"> Fashion Sport</p>
                        <div className="price_single">
                        <span className="reducedfrom item_price">{info.priceNew}.000 vnd</span>
                        <a href="/all">click for offer</a>
                        <div className="clearfix"></div>
                        </div>
                        <h4 className="quick">Mô tả Sản phẩm </h4>
                        <p className="quick_desc"> {info.des}</p>
                        <div className="wish-list">
                           <td>Size</td>

                           <td>
                           <select id="size"  >
                           
                           
                            {
                               size&&size.map((item,index)=>{
                                return <Option 
                                key={item.idSize}
                                id={item.idSize}
                                name={item.nameSize}
                                >

                                </Option>


                            }

                                )
                            }
                        </select>
                           </td>
                        </div>
                        <div className="quantity"> 
                                        <div className="quantity-select">                           
                                            <div className="entry value-minus"onClick={onClickDel}>&nbsp;</div>
                                            <div className="entry value" ><span id="sl">{info.soluong}</span></div>
                                            <div className="entry value-plus active" onClick={onClickAdd} >&nbsp;</div>
                                        </div>
                                    </div>
                     
                
                        
                        <Link to='/checkout' className="add-to item_add hvr-skew-backward"  onClick={() => {if(window.confirm('Bạn muốn update sản phẩm  ?')){addCart()};}}>Update</Link>
                    <div className="clearfix"> </div>
                    </div>
                
                            </div>
                    <div className="clearfix"> </div>
                
                    <div className="tab-head">
                    <nav className="nav-sidebar">
                <ul className="nav tabs">
                <li className="active"><a href="#tab1" data-toggle="tab">Product Description</a></li>
                <li className=""><a href="#tab2" data-toggle="tab">Additional Information</a></li> 
                <li className=""><a href="#tab3" data-toggle="tab">Reviews</a></li>  
                </ul>
            </nav>
            <div className="tab-content one">
        <div className="tab-pane active text-style" id="tab1">
        <div className="facts">
                                            <p > There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined </p>
                                                <ul>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Research</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Design and Development</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Porting and Optimization</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>System integration</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Verification, Validation and Testing</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Maintenance and Support</li>
                                                </ul>         
                                            </div>

        </div>
        <div className="tab-pane text-style" id="tab2">
            
                                            <div className="facts">									
                                                <p > Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable source. Lorem Ipsum comes from sections </p>
                                                <ul >
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Multimedia Systems</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Digital media adapters</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Set top boxes for HDTV and IPTV Player  </li>
                                                </ul>
                                            </div>	

        </div>
        <div className="tab-pane text-style" id="tab3">

                                            <div className="facts">
                                            <p > There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined </p>
                                                <ul>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Research</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Design and Development</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Porting and Optimization</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>System integration</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Verification, Validation and Testing</li>
                                                    <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Maintenance and Support</li>
                                                </ul>     
                                        </div>	

        </div>
        
        </div>
        <div className="clearfix"></div>
        </div>
                    
        </div>


        {/* Hình ảnh liên hệ */}
                <div className="clearfix"> </div>
            
            </div>
            
                
            
                
                </div>
                
    );
    
}
export default Edit;