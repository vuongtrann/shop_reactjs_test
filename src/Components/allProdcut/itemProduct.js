import React, {Component}  from "react";
import {Link} from "react-router-dom";
import {domain} from '../../constant';
class ItemProduct extends Component{
    render(){
        var img=JSON.parse(this.props.image);

    return(
        <>

        <div className="col-md-4 item-grid1 simpleCart_shelfItem">
                            <div className=" mid-pop">
                            <div className="pro-img">
                                <img src={domain+"/"+img.images[0]} className="img-responsive" alt=""/>
                                <div className="zoom-icon ">
                                <a className="picture b-link-stripe b-animate-go  thickbox"  rel="title"><i className="glyphicon glyphicon-search icon "></i></a>
                                <a ><i className="glyphicon glyphicon-menu-right icon"></i></a>
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
                                        <p ><label>{this.props.priceOld}.000 vnd</label><em className="item_price priceAll">{this.props.priceNew}.000 vnd</em></p>
                                        <div className="block">
                                            <div className="starbox small ghosting"> </div>
                                        </div>
                                        
                                        <div className="clearfix"></div>
                                    </div>
                                    
                                </div>
                            </div>
         </div>
        </>
    );

    }


}
export default ItemProduct;