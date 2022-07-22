import React,{useState,useEffect} from "react";
import API from "../../API";
import { domain } from "../../constant";
const Item=(props)=>{
    const [success, setSuccess]= useState({show: false, state: null, message: ""});
    
  console.log(props.props.masp)
   const deleteItem=()=>{
   	
  
     const data={idProduct:props.props.idProduct,email:props.props.email};
           API.deleteCart(data).then((res)=>{
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
           })
           if(success){
            alert("Xóa thành công");
            window.location.reload();
        }
   }
 var img =JSON.parse(props.props.image)
    return(
        <>
         <tr class="cart-header">

<td class="ring-in"><a href={`/${props.props.idProduct}`} class="at-in"><img src={domain+"/"+img.images[0]} class="img-responsive2" alt=""/></a>
<div class="sed">
    <h5><a href={`/${props.props.idProduct}`}>{props.props.namProduct}</a></h5>
   

</div>
<div class="clearfix"> </div>
<div class="close1" onClick={() => {if(window.confirm('Bạn muốn xóa sản phẩm ?')){deleteItem()};}}> </div></td>
<td>{props.props.soluong}</td>
<td>{props.props.size}</td>

<td>{props.props.gia}.000 vnd</td>
<td class="item_price">{props.props.soluong*props.props.gia}.000 vnd</td>
<td class="add-check"><a class="item_add hvr-skew-backward" href={`/edit${props.props.idProduct}`}>Sửa sản phẩm</a></td>
</tr>
        </>
    );

}
export default Item;