import React, { Component, useEffect, useState } from "react";

const Chat2 =()=>{


        const moForm=()=>{
            console.log('mở')
            document.getElementById("myForm").style.display = "block";
           
          }
          /*Hàm Đóng Form*/
         const dongForm=()=>{
            document.getElementById("myForm").style.display = "none";
          }
        return(

            <>
{/*            
            <a class="nut-mo-chatbox"  onClick={moForm}>
                <img className='avatar' src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-chat-icon-vector-illustration-in-line-style-for-any-purpose-png-image_4246282.jpg"/>
            </a>
    <div class="Chatbox" id="myForm">
   <form action="" class="form-container">
     <div className="center">
        <img  src="https://lh3.googleusercontent.com/-oauOGfRGLBU/YkayObi8ECI/AAAAAAAA6uU/6hJIvhjz_74WHTMNvD7XRFdfiFK60tO1gCNcBGAsYHQ/s0/avatar-anime.jpg" className="avatar"/>
     </div>
    <label for="msg"><b>Lời Nhắn</b></label>
     <textarea placeholder="Bạn hãy nhập lời nhắn.." name="msg" required></textarea>
    <button type="submit" class="btn">Gửi</button>
     <button type="button" class="btn nut-dong-chatbox" onClick={dongForm}>Đóng</button>
   </form>
   </div> */}
    <a class="nut-mo-chatbox"  onClick={moForm}>
                <img className='avatar' src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-chat-icon-vector-illustration-in-line-style-for-any-purpose-png-image_4246282.jpg"/>
            </a>
            <div class="Chatbox" id="myForm">
            <div className="center">
        <img  src="https://lh3.googleusercontent.com/-oauOGfRGLBU/YkayObi8ECI/AAAAAAAA6uU/6hJIvhjz_74WHTMNvD7XRFdfiFK60tO1gCNcBGAsYHQ/s0/avatar-anime.jpg" className="avatar"/>
     </div>
  <div class="chat-container">
  
  <ul class="chat">
    
    <li class="message left">
      <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt=""/>
      <p>DAD! I'm serious!</p>
    </li>
    <li class="message right">
      <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt=""/>
      <p>I thought your name was hungry...?</p>
    </li>
    <li class="message left">
      <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt=""/>
      <p>ARE YOU KIDDING ME?</p>
    </li>
    <li class="message right">
      <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt=""/>
      <p>No, I'm Dad...</p>
    </li>
    <li class="message left">
      <img class="logo" src="https://randomuser.me/api/portraits/women/17.jpg" alt=""/>
      <p>ARE YOU KIDDING ME?</p>
    </li>
    <li class="message right">
      <img class="logo" src="https://randomuser.me/api/portraits/men/67.jpg" alt=""/>
      <p>No, I'm Dad...</p>
    </li>
  </ul>

</div>
<input type="text" class="text_input" placeholder="Message..."/>  
  
 
  <a class="publisher-btn text-info"  data-abc="true" ><i class="glyphicon glyphicon-send" onClick={onclick}></i></a>
</div>
<div>

</div>
            
            </>
        )
    
}
export default Chat2;