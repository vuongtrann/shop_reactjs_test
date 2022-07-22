import React, { useEffect, useState } from "react";
import API from "../../API";
import ChangePass from "./changePass";
import Content from "./content";

 import './grid.css'
 import './main.css'
import Menu from "./menu";
import Sale from "./sale";
import ThongBao from "./thongbao";

const Profile =()=>{
    let email=sessionStorage.getItem('email');
    const [user,setUser]=useState();
   
    const [flag,setflag]=useState();
    const [flag2,setflag2]=useState();
	const [searchTerm, setSearchTerm] = useState(0);
    const [donhang,setDonHang]=useState();
  
 
	useEffect(()=>{
        API.getUserEmail(email).then((res)=>{
            if(res.data.success){
                setUser(res.data.result)
            }
        }) 
        setflag(1);
		
        API.getOrderEmail(email).then((res)=>{
            if(res.data.success){
                setDonHang(res.data.result)
            }
        }) 
    },[searchTerm]);
    
    const onclick=(value)=>{
       
        
        setflag(value)
    }
  
    
   
if(user){
    
   if(flag == 1){
    return(
        <>
      
        <div class="gri wide">
            <div class="roww">
                <Menu
                user={user}
                active={flag}
                onClick={onclick}

            

                >

                </Menu>
                <Content
                 user={user}>

                </Content>
                
               
             
            </div>
        </div> 
   
   
        </>
    )
   }else if(flag == 3){
      if(flag){
        return(
            <>
          
            <div class="gri wide">
                <div class="roww">
                    <Menu
                    user={user}
                    active={flag}
                    onClick={onclick}
    
                
    
                    >
    
                    </Menu>
                    
                    
                  <Sale donhang={donhang}></Sale>
                 
                </div>
            </div> 
       
       
            </>
        )
      }else{
        return('Chưa có đơn hàng nào')
      }
   }else if(flag==2){
    return(
        <>
      
        <div class="gri wide">
            <div class="roww">
                <Menu
                user={user}
                active={flag}
                onClick={onclick}

            

                >

                </Menu>
               <ChangePass
                  user={user}
               ></ChangePass>
                
               
             
            </div>
        </div> 
   
   
        </>
    )
   }
   else if(flag==4){
    return(
        <>
      
        <div class="gri wide">
            <div class="roww">
                <Menu
                user={user}
                active={flag}
                onClick={onclick}

            

                >

                </Menu>
               <ThongBao></ThongBao>
                
               
             
            </div>
        </div> 
   
   
        </>
    )
   }
}
else{
    return('aa')
}
  

}
export default Profile;