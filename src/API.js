import { domain } from "./constant";
import axios from "axios";

class API{
  getProductLimit(){
    const url= domain + "/product/getProductLimit";
    return axios.get(url);
  }
  getAll(){
    const url= domain + "/product/getAll";
    return axios.get(url);
  }
  getProductId(id){  
    const url= domain +"/product/getProduct/"+id;
    return axios.get(url);
  }
  getProductType(type){  
 
    const url= domain +"/product/getProductType/"+type;
    console.log(url);
    console.log(type);
    return axios.get(url);
  }
  getSize(){
    const url = domain+"/size/getAll";
    return axios.get(url);
  }
  getCart(email){
    const url=domain+"/cart/getAll/"+email;
    console.log(url);
    return axios.get(url);

  }
  addCart(data,id){
    const url=domain+"/cart/addCart"+id;
    return axios.post(url,data);
  }
  updateCart(data){
    const url=domain+"/cart/updateCart";
    console.log(url);
    return axios.post(url,data);
  }
  getCartId(data,id){
    const url=domain+"/cart/editCart/"+id;
    console.log(url);
    return axios.post(url,data);
  }
  deleteCart(data){
    
    const url=domain+"/cart/deleteCart";
   
    return axios.post(url,data);
   
  }
  deleteCartPig(data){
    
    const url=domain+"/cart/deleteCartPig"+data;
   console.log(data);
    return axios.delete(url);
   
  }
insertUser=(data)=>{
    const url=domain+"/user/insertUser";
    console.log(data);
    console.log(url);
    return axios.post(url,data);

  }
  updatePass=(data)=>{
    const url=domain+"/user/updatepass";
    console.log(data);
    console.log(url);
    return axios.post(url,data);

  }
  updateUser=(data)=>{
    const url=domain+"/user/update";
    console.log(data);
    console.log(url);
    return axios.post(url,data);

  }
  getUser=()=>{
    const url=domain+"/user/getUser";
    console.log(url)
    return axios.get(url);
  }
  getUserEmail=(email)=>{
    const url=domain+"/user/getUserEmail"+email;
    console.log(url)
    return axios.get(url);
  }
  getChat=(email)=>{
    const url=domain+"/chat/getChat"+email;
    console.log(url)
    return axios.get(url);
  }
  addChat=(data)=>{
    const url=domain+"/chat/addChat";
    console.log(url,data)
    return axios.post(url,data);
  }
  
  addOrder(data){
    const url=domain+"/order/addOrder";
    return axios.post(url,data);

  }
  addDetail(data){
    const url=domain+"/order/addDetail";
    return axios.post(url,data);

  }
  getWarehouse(){
    const url = domain+"/warehouse/getAll";
    console.log(url)
    return axios.get(url);
  
  }
  EnterStock(data){
    const url= domain+'/warehouse/insert';
    console.log(data)
    return axios.post(url,data);
  }
  UpdateEnterStock(data){
    const url= domain+'/warehouse/update';
    console.log(data)
    return axios.post(url,data);
  }
  getOrder(){
    const url = domain+"/order/getAll";
    return axios.get(url);
  }
  getOrderEmail(email){
    const url = domain+"/order/getoder"+email;
    return axios.get(url);
  }
  getOrderDetail(mahd){
    const url = domain+"/order/getdetail"+mahd;
    console.log(url)
    return axios.get(url);
  }
  getOrderTrangThai(data){
    const url = domain+"/order/getodertrangthai";
    console.log(data)
    return axios.post(url,data);
  }
  getHoadon(mahd){
    const url = domain+"/order/getHoadon"+mahd;
console.log(url)
    return axios.get(url);
  }
}
export default new API()