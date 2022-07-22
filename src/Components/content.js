import React,{Component, useEffect, useState} from 'react'
import ContentMid from './content_mid';
import API from "../API";
import Banner from './banner';
import Brand from './brand';


function Content(){
    const [product, setProduct] = useState([]);
 
    const [error, setError]= useState(false);
    const [searchTerm, setSearchTerm] = useState(0);
    useEffect(()=>{
        try {
           
            API.getProductLimit(searchTerm).then((res)=>{
                if(res.data.success){
                    if(searchTerm>0){
                        setProduct((p)=>([...p, ...res.data.result]))
                    }else{
                        setProduct(res.data.result)
                    }
                }
            })
            
        } catch (error) {
            console.log("false");
        }finally{
           console.log("false");
        }
    },[searchTerm])
    console.log(product);
   
    return(
        <>
        <Banner/>
        <div className="content">
        <div className="container">
            <div className="content-top">
                <div className="col-md-6 col-md">
                    <div className="col-1">
                     <a href="/" className="b-link-stroke b-animate-go  thickbox">
                        <img src="../image/trendy.jpg" className="img-responsive2" alt=""/>
                        <div className="b-wrapper1 long-img">
                            <p className="b-animate b-from-right    b-delay03 ">Fashion Sport</p>
                            <label className="b-animate b-from-right    b-delay03 "></label>
                            <h3 className="b-animate b-from-left    b-delay03 ">Thịnh hành</h3>
                         </div>
                        </a>

                    </div>
                    <div className="col-2">
                        <span>Ưu đãi lớn</span>
                        <h2><a href="/">Sang trọng &amp; Hợp thời trang</a></h2>
                        <p>Trái với suy nghĩ của nhiều người, Fashion Sport không chỉ đơn giản là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm văn học Latinh cổ điển từ năm 45 trước Công nguyên, đã tồn tại hơn 2000 năm</p>
                        <a href="/" className="buy-now">Mua ngay</a>
                        
                       
      
      
                    </div>
                    <div className="col-3">
                    <img src="../image/panner.png" className="img-responsive2" alt=""/>
      
                    </div>
                </div>
                <div className="col-md-6 col-md1">
                    <div className="col-3 " >
                    <a href="/" className="b-link-stroke b-animate-go  thickbox">
                    <img src="../image/forman.jpg" className="img-responsive2" alt=""/>
                        <div className="b-wrapper1 ">
                        <p className="b-animate b-from-right    b-delay03 ">Fashion Sport</p>
                        <label className="b-animate b-from-right    b-delay03 "></label>
                            <h3 className="b-animate b-from-left    b-delay03 ">Dành cho nam</h3>
                         </div>
                        </a>
                    </div>
                    <div className="col-3 " >
                    <a href="/" className="b-link-stroke b-animate-go  thickbox">
                    <img src="../image/forgirls.jpg" className="img-responsive2" alt=""/>
                        <div className="b-wrapper1 ">
                        <p className="b-animate b-from-right    b-delay03 ">Fashion Sport</p>
                        <label className="b-animate b-from-right    b-delay03 "></label>
                            <h3 className="b-animate b-from-left    b-delay03 ">Dành cho nữ</h3>
                         </div>
                        </a>
                    </div>
                    <div className="col-3 " >
                    <a href="/" className="b-link-stroke b-animate-go  thickbox">
                    <img src="../image/forkid.jpg" className="img-responsive2" alt=""/>
                        <div className="b-wrapper1 ">
                        <p className="b-animate b-from-right    b-delay03 ">Fashion Sport</p>
                        <label className="b-animate b-from-right    b-delay03 "></label>
                            <h3 className="b-animate b-from-left    b-delay03 ">Dành cho trẻ</h3>
                         </div>
                        </a>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
          
        </div>
        <div className="content-mid">
        <h3>Sản phẩm thịnh hành</h3>
        <label className="line"></label>
        <div className="mid-popular">
            {
                product&&product.map((item,index)=>{
                    return <ContentMid
                              key={item.idProduct}
                              name={item.namProduct}
                              priceNew={item.priceNew}
                              priceOld={item.priceOld}
                              image={item.image}
                              type={item.type}
                              product={item}
                             id= {item.idProduct}
                    ></ContentMid>})
            }
        
            <div className="clearfix"></div>
            <Brand/>
        </div>
            {
              
           
               
            }
        </div>

        
        </div>
    </>
      );
}
export default Content;