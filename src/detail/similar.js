import React,{Component} from "react";
import './similar.css';
import {
    Link
  }from "react-router-dom";
  import { domain } from "../constant";
class Similar extends Component{
    render(){
        var img=JSON.parse(this.props.product.image);
        return(
            <>
            <div className="col-md-4 item-grid1 simpleCart_shelfItem">
                <div className="card item" >
                <Link to={`/${this.props.product.idProduct}`}> <img className="card-img-top img-responsive" src={domain+"/"+img.images[0]} alt="Card image cap"/></Link>
                <div className="card-body">
                <p className="card-text">
                <div className="mid-1">
                                <div className="women">
                                <div className="women-top">
                                    <span className="categories" >{this.props.product.nameCategories}</span>
                                    <h6><Link  to={`/${this.props.product.idProduct}`} >{this.props.product.namProduct}</Link></h6>
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
         
            </>
        )
    }
}
export default Similar;