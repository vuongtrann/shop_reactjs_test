import React,{useState,useEffect} from "react";
import API from "../../API";

const Login =()=>{
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
	

      let email=document.getElementById('email').value;
      let pass=document.getElementById('pass').value;
     
  if(email==''||pass==''){
      alert("Không được bỏ trống");
  }else{
	let n=false;
			for( let i =0;i<user.length;i++){
				if (user[i].email==email && user[i].matkhau==pass)
				{
					n=true
					sessionStorage.setItem('user',user[i].ten);
					sessionStorage.setItem('email',user[i].email);
				}
			}
			if(n){
				alert('login success')
			
				console.log(sessionStorage.getItem('email'));
				window.location='/'
			    
			}
			else(
				alert('not find account')
			)
		
  }
}


return(
    <>
    <div class="banner-top">
	<div class="container">
		<h1>Đăng Nhập</h1>
		<em></em>
		<h2><a href="/">Trang chủ</a><label>/</label>Đăng Nhập</h2>
	</div>
</div>

<div class="container login">
		<div class="login">
		
			<form>
			<div class="col-md-6 login-do">
				<div class="login-mail">
					<input type="text" placeholder="Email" id="email"/>
					<i  class="glyphicon glyphicon-envelope"></i>
				</div>
				<div class="login-mail">
					<input type="password" placeholder="Mật Khẩu" id="pass"/>
					<i class="glyphicon glyphicon-lock"></i>
				</div>
				   <a class="news-letter " href="#">
						 <label class="checkbox1"><input type="checkbox" name="checkbox" /><i> </i>Nhớ mật khẩu</label>
					   </a>
		
				
				<label class="hvr-skew-backward">
				<div  class="hvr-skew-backward" onClick={onClick}>Đăng nhập</div>
				</label>
			</div>
			<div class="col-md-6 login-right">
				 <h3>Đăng ký tài khoản miễn phí</h3>
				 
				 <p></p>
				<a href="/register" class=" hvr-skew-backward">Đăng ký</a>

			</div>
			
			<div class="clearfix"> </div>
			</form>
		</div>

</div>

    </>
)
}
export default Login;