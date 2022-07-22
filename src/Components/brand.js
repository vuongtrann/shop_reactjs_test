import React,{Component} from "react";

class Brand extends Component{
   render(){
       return (
           <>
           <div className="container">
			<div className="brand">
				<div className="col-md-3 brand-grid">
					<img src="images/ic.png" className="img-responsive" alt=""/>
				</div>
				<div className="col-md-3 brand-grid">
					<img src="images/ic1.png" className="img-responsive" alt=""/>
				</div>
				<div className="col-md-3 brand-grid">
					<img src="images/ic2.png" className="img-responsive" alt=""/>
				</div>
				<div className="col-md-3 brand-grid">
					<img src="images/ic3.png" className="img-responsive" alt=""/>
				</div>
				<div className="clearfix"></div>
			</div>
			</div>
           </>
       )
   }
}
export default Brand;