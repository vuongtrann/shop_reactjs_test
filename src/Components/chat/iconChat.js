import React, {Component} from "react";
import icon from '../../image/logo_Chat.jpg';
import './iconChat.css';
const iconChat =()=>{
    if(sessionStorage.getItem('user')){
        return(
            <>
               <div>
                    <a href="/chat" > <img src={icon} className='iconChat'></img></a>
               </div>
            </>
        )
    }else{
        return (
            <>
            </>
        )
    }
  

}

        

export default iconChat;