import React,{useState,useEffect} from "react";
import API from "../../API";


const Register=()=>{
    const [success, setSuccess]= useState({show: false, state: null, message: ""});
	const [img1,setImg1]=useState();
	const [user,setUser]=useState();
	const [searchTerm, setSearchTerm] = useState(0);
	useEffect(()=>{
        API.getUser(searchTerm).then((res)=>{
            if(res.data.success){
                setUser(res.data.result)
            }
        }) 
		
      
    },[searchTerm]);


    const onClick=()=>{
	
	let name=document.getElementById('name').value;
      let email=document.getElementById('email').value;
      let pass=document.getElementById('pass').value;
      let address=document.getElementById('address').value;
      let phone=document.getElementById('phone').value;
	  const data= new FormData();
	  let flag=true;

	if(name===''||email===''||address===''||phone===''){
		flag=false;
		alert("Không được bỏ trống")
		
	}
	if(email.search("@")<0){
		flag=false;
		alert('Email must have @ sign ')
  }
  if(isNaN(phone)==true){
	flag=false;
	alert("Phone must be a number")
}
let n=false;
if(user)
	{for( let i =0;i<user.length;i++){
		if (user[i].email==email)
		{
			n=true
		}
	}
	if(n){
		alert('Tài khoản email đã được sử dụng')
		flag=false;
	}
}
	if(flag)
	{
		data.append("name", name);
	data.append("email", email);
	data.append("pass", pass);
	data.append("address", address);
	data.append("phone", phone);
	console.log(img1)
	if(img1){
		for(let i=0;i<img1.length;i++){
			console.log(img1[i]);
			data.append("files", img1[i])
		}
	}
	console.log(user)
		API.insertUser(data).then((res)=>{
			alert(res.data.message);
		setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
	   })
	   
		
		 window.location='/login';

	}
	
	

   
	
	
 
   
	


    }
	const imgchange1=(event)=>{
		setImg1(event.target.files);
		console.log(img1)
	 }
  

     
return(
    <>
    <div class="banner-top">
	<div class="container">
		<h1>Đăng Ký</h1>
		<em></em>
		<h2><a href="index.html">Trang chủ</a><label>/</label>Đăng Ký</h2>
	</div>
</div>

<div class="container">
		<div class="login">
			<form>
			<div class="col-md-6 login-do">
			<div class="login-mail">
					<input type="text" placeholder="Tên " id="name"/>
					<i  class="glyphicon glyphicon-user"></i>
				</div>
				<div class="login-mail">
					<input type="text" placeholder="SDT" id="phone"/>
					<i  class="glyphicon glyphicon-phone"></i>
				</div>
				<div class="login-mail">
					<input type="text" placeholder="Email" id="email"/>
					<i  class="glyphicon glyphicon-envelope"></i>
				</div>
				<div class="login-mail">
					<input type="password" placeholder="Mật Khẩu" id="pass"/>
					<i class="glyphicon glyphicon-lock"></i>
				</div>
                <div class="login-mail">
					<input type="text" placeholder="Địa chỉ"id="address"/>
					<i  class="glyphicon glyphicon-map-marker"></i>
				</div>
				<div class="login-mail">
					<label>Avatar</label>
					<input type="file"  className="form-control" onChange={(event)=>imgchange1(event)} placeholder="Price Old"/>
				
				</div>
				   <a class="news-letter " href="#">
						 <label class="checkbox1"><input type="checkbox" name="checkbox" /><i> </i>Nhớ Mật Khẩu</label>
					   </a>
				
					   <div  class="hvr-skew-backward" onClick={onClick}>Đăng ký</div>
			
                
			
			</div>
			<div class="col-md-6 login-right">
				 <h3>Đăng nhập tài khoản đã có</h3>
				 
				 <p></p>
				<a href="/login" class="hvr-skew-backward">Đăng nhập</a>

			</div>
			
			<div class="clearfix"> </div>
			</form>
		</div>

</div>

</>
)
}
export default Register;