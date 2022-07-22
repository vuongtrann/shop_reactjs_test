import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { useParams,Link } from "react-router-dom";
import API from "../API";
import Brand from "../Components/brand";
import Option from "./option"
import Similar from "./similar";
import { domain } from "../constant";

const Product=({})=>{
    const mant= useParams();
    const [info, setInfo]= useState();
    const [itemCart,setItem]=useState();
    const [size,setSize] =useState();
    const [productType, setProductType]= useState();
    const [searchTerm, setSearchTerm] = useState(0);
    const [success, setSuccess]= useState({show: false, state: null, message: ""});
    let itemData={};
 
    
    
    useEffect(()=>{
        API.getProductId(mant.id).then((res)=>{
            if(res.data.success){
                setInfo(res.data.result[0])
            }
        })
        
        window.scrollTo(0, 0)
        
    },[mant]);
    useEffect(()=>{
        API.getSize(searchTerm).then((res=>{
            if(res.data.success){
                setSize(res.data.result);
            }
        }));

    },[searchTerm]);
console.log(size);
    let type;
    if(info){
       type = info.idType;
       
    }else{
        type = 't1';
    }
  
  
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
                setItem(res.data.result[0])
            }
        })
   
    },[mant]);
//     useEffect(()=>{
//         API.getProductType().then((res=>{
//             if(res.data.success){
//                 setProductType(res.data.result);
//             }
//         }));

//     },[searchTerm]);

    if(!info){
        return <div>Không có data</div>
    }
    if(!productType)
  {
     
    API.getProductType(info.idCategories).then((res)=>{
        if(res.data.success){
            setProductType(res.data.result);
        }
       
        console.log(res.data.message);
    })
   
  }
 

  
 
    console.log(productType);
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
  
        let dataE={email:email};
        
   
        console.log(itemCart);
        const data= new FormData();
        let sl=new Number(document.getElementById("sl").innerHTML);
        itemData={ipProduct:info.idProduct,soluong:sl,gia:info.priceNew,size:z,email:email};
        console.log(itemData);
        if(itemCart){
            alert("Sản phẩm đã tồn tại trong giỏ hàng");
        }
        else{
            API.addCart(itemData,info.idProduct).then((res)=>{
                setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
            })
            if(success){
                alert("Thêm vào giỏ hàng thành công");
            }
        }
       
    }

var img=JSON.parse(info.image);
    console.log(productType);
    return(
        <>
    
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
                                <a href="#">click for offer</a>
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
                                                    <div className="entry value" ><span id="sl">1</span></div>
                                                    <div className="entry value-plus active" onClick={onClickAdd} >&nbsp;</div>
                                                </div>
                                            </div>
                            
                        
                                
                                <Link to='/checkout' className="add-to item_add hvr-skew-backward"  onClick={addCart}>Thêm vào giỏ hàng</Link>
                            <div className="clearfix"> </div>
                            </div>
                        
                    </div>
                    <div className="clearfix"> </div>
                        
                            <div className="tab-head">
                            <h1>Sản phẩm tương tự</h1>
                          {
                             productType&&productType.map((item,index)=>{
                                 return <Similar 
                                 key={item.idProduct}
                                 product={item}
                                 
                                 >

                                 </Similar>
                             })
                          }
                           <div className="clearfix"></div>
                            <div>
                            <nav className="nav-sidebar">
                                                    
                                                    <ul className="nav tabs">
                                                    <li className="active"><a href="#tab1" data-toggle="tab">Mô tả Sản phẩm</a></li>
                                                    <li className=""><a href="#tab2" data-toggle="tab">Thông tin thêm</a></li> 
                                                    <li className=""><a href="#tab3" data-toggle="tab">Nhận xét</a></li>  
                                                    </ul>
                                                </nav>
                            </div>           
                                    
                            <div className="tab-content one">
                                    <div className="tab-pane active text-style" id="tab1">
                                    <div className="facts">
                                                                        <p > Có rất nhiều biến thể của các đoạn văn của Lorem Ipsum có sẵn, nhưng phần lớn đã bị thay đổi dưới một số hình thức, bởi sự hài hước được đưa vào hoặc các từ ngẫu nhiên trông thậm chí không đáng tin một chút. Nếu bạn định sử dụng một đoạn văn của Lorem Ipsum, bạn cần chắc chắn rằng không có bất kỳ điều gì đáng xấu hổ ẩn ở giữa văn bản. Tất cả các trình tạo Lorem Ipsum trên Internet đều có xu hướng lặp lại các phần được xác định trước khi cần thiết, khiến đây trở thành trình tạo thực sự đầu tiên trên Internet. Nó sử dụng từ điển hơn 200 từ Latinh, được kết hợp </p>
                                                                            <ul>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Nghiên cứu</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Thiết kế và phát triển</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Chuyển và tối ưu hóa</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Hệ thống tích hợp</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Xác minh, Xác thực và Kiểm tra</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Bảo trì và hỗ trợ</li>
                                                                            </ul>         
                                                                        </div>
                            
                                    </div>
                                    <div className="tab-pane text-style" id="tab2">
                                        
                                                                        <div className="facts">									
                                                                            <p > Có rất nhiều biến thể của các đoạn văn của Lorem Ipsum có sẵn, nhưng phần lớn đã bị thay đổi dưới một số hình thức, bởi sự hài hước được đưa vào hoặc các từ ngẫu nhiên trông thậm chí không đáng tin một chút. Nếu bạn định sử dụng một đoạn văn của Lorem Ipsum, bạn cần chắc chắn rằng không có bất kỳ điều gì đáng xấu hổ ẩn ở giữa văn bản. Tất cả các trình tạo Lorem Ipsum trên Internet đều có xu hướng lặp lại các phần được xác định trước khi cần thiết, khiến đây trở thành trình tạo thực sự đầu tiên trên Internet. Nó sử dụng từ điển hơn 200 từ Latinh, được kết hợp </p>
                                                                            <ul >
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Multimedia Systems</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Digital media adapters</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Set top boxes for HDTV and IPTV Player  </li>
                                                                            </ul>
                                                                        </div>	
                            
                                    </div>
                                    <div className="tab-pane text-style" id="tab3">
                            
                                                                        <div className="facts">
                                                                        <p > Có rất nhiều biến thể của các đoạn văn của Lorem Ipsum có sẵn, nhưng phần lớn đã bị thay đổi dưới một số hình thức, bởi sự hài hước được đưa vào hoặc các từ ngẫu nhiên trông thậm chí không đáng tin một chút. Nếu bạn định sử dụng một đoạn văn của Lorem Ipsum, bạn cần chắc chắn rằng không có bất kỳ điều gì đáng xấu hổ ẩn ở giữa văn bản. Tất cả các trình tạo Lorem Ipsum trên Internet đều có xu hướng lặp lại các phần được xác định trước khi cần thiết, khiến đây trở thành trình tạo thực sự đầu tiên trên Internet. Nó sử dụng từ điển hơn 200 từ Latinh, được kết hợp </p>
                                                                        <ul>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Nghiên cứu</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Thiết kế và phát triển</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Chuyển và tối ưu hóa</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Hệ thống tích hợp</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Xác minh, Xác thực và Kiểm tra</li>
                                                                                <li><span className="glyphicon glyphicon-ok" aria-hidden="true"></span>Bảo trì và hỗ trợ</li>
                                                                            </ul>       
                                                                    </div>	
                            
                                    </div>
                                    
                            </div>
                <div className="clearfix"></div>
                </div>
               <Brand/>
                        
            </div>
            <div className="col-md-2">
        
            </div>
    
            {/* Hình ảnh liên hệ */}
                    <div className="clearfix"> </div>
                
                </div>
                
                    
               
                    
                    </div>
        </>
        
                
    );
}
export default Product;