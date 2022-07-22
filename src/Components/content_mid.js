import React,{Component} from 'react'
import {
  Link
}from "react-router-dom";
import { domain } from '../constant';
class ContentMid extends Component{

  render(){
    var img=JSON.parse(this.props.product.image);
    
    return(
        
       <>
          {/* <div className="col-md-3 item-grid1 simpleCart_shelfItem">
                            <div className=" mid-pop custom">
                            <div className="pro-img">
                                <img src={`/image/${this.props.image}`} className="img-responsive" alt=""/>
                                <div className="zoom-icon ">
                                <a className="picture b-link-stripe b-animate-go  thickbox" href={`/image/${this.props.image}`} rel="title"><i className="glyphicon glyphicon-search icon "></i></a>
                                <a href="single.html"><i className="glyphicon glyphicon-menu-right icon"></i></a>
                                </div>
                                </div>
                                <div className="mid-1">
                                <div className="women">
                                <div className="women-top">
                                    <span>{this.props.type}</span>
                                    <h6><a href="">{this.props.name}</a></h6>
                                    </div>
                                    <div className="img item_add">
                                   <Link to={`/${this.props.id}`}><img src="images/ca.png" alt=""/></Link>
                                    </div>
                                    <div className="clearfix"></div>
                                    </div>
                                    <div className="mid-2">
                                        <p ><label>{this.props.priceOld}.000 vnd</label><em className="item_price">{this.props.priceNew}.000 vnd</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        
                                        <div className="clearfix"></div>
                                    </div>
                                    
                                </div>
                            </div>
         </div> */}


 
                 <div className="col-md-3 item-grid1 simpleCart_shelfItem">
                    <div className="card item" >    
                 <img className="card-img-top img-responsive" src={domain+"/"+img.images[0]} alt="Card image cap"/>
                    <div className="card-body">
                    <p className="card-text">
                    <div className="mid-1">
                                    <div className="women">
                                    <div className="women-top">
                                        <span className="categories" >{this.props.product.nameCategories}</span>
                                        <h6><Link to={`/${this.props.id}`}>{this.props.product.namProduct}</Link></h6>
                                        </div>
                                        <div className="img item_add">
                                    <Link to={`/${this.props.id}`}><img src="images/ca.png" alt=""/></Link>
                                        </div>
                                        <div className="clearfix"></div>
                                        </div>
                                        <div className="mid-2 ">
                                            <p ><label className="price1">{this.props.product.priceOld},000 vnđ</label></p>
                                            <div className="block">
                                                <div className="starbox small ghosting"> </div>
                                            </div>
                                            <em className="item_price price2">    {this.props.product.priceNew},000 vnđ</em>
                                            <div className="clearfix"></div>
                                        </div>
                                        
                                    </div>
                    </p>
                    </div>
                    </div>
                    
                </div>
                {/* <div class="col col-shop l-2-4 m-4 c-6">
                                    <div class="discount-item">
                                        <a href="" class="discount-link">

                                            <img src={domain+"/"+img.images[0]} alt="" class="discount-img"/>
                                            <h4 class="discount-about">MẮT KÍNH</h4>
                                            <div>
                                                <span class="discount-to">Từ</span>
                                                <span class="discount-primary">1.250</span>
                                            </div>
                                        </a>
                                    </div>
                                </div> */}
       </>
      );
  }
}
export default ContentMid;