import React,{Component, useEffect, useState} from 'react'
import API from "../../API";
import './chat.css';
import BodyMess from './bodymess';
const Chat=()=>{
    var email=sessionStorage.getItem('email')
    const [Chat,setChat]=useState();
    const [searchTerm, setSearchTerm] = useState(0);
    const [Success, setSuccess]= useState({show: false, state: null, message: ""});
	useEffect(()=>{
        API.getChat(email).then((res)=>{
            if(res.data.success){
                setChat(res.data.result)
            }
        }) 
		
      
    },[searchTerm]);
    if(Chat){
    //     var messageBody= document.getElementById("chat-content")
    var chatHistory = document.getElementById("chat-content");
    chatHistory.scrollTop = chatHistory.scrollHeight;
        
    }
    function generateID(length){
        const az= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        var id= "";
        for(let i=0;i<length;i++){
            var index= Math.floor(Math.random()* 63);
            id+=az[index]
        }
        return id;
    }
    console.log(Chat);
    const onclick=()=>{
        var today = new Date();
        var newMessage=document.getElementById("newchat").value;
        let id=generateID(6);
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var type="user";
        var success="success"
        var trangthai="Chưa xem"
        var data={id:id,idAcount:email,message:newMessage,time:time,success:success,type:type,trangthai:trangthai};
        API.addChat(data).then((res)=>{
            setSuccess({...success, show: true, state: res.data.success, message:res.data.message });
        })
        if(Success){
            document.getElementById("newchat").value="";
            window.location.reload();

        }

    }
    return(
        <>
          
         <div className='paddingtop'> 
  
        
         <div class="row contai d-flex justify-content-center">
         <div class="col-md-9">
         <div class="card card-bordered">
              <div class="card-header">
                      <h4 class="card-title"><strong>Chat</strong></h4>
                      <a class="btn btn-xs btn-secondary" href="#" data-abc="true">Let's Chat App</a>
              </div>
    
              <div class="ps-container ps-theme-default ps-active-y" id="chat-content" >
                 {
                    Chat && Chat.map((item,index)=>{
                        return <BodyMess 

                        key={item.id}
                        item={item}
                        >

                        </BodyMess>
                    })
                 }
                                                          
              </div>               
              
              <div class="ps-scrollbar-x-rail" >
                  <div class="ps-scrollbar-x" tabindex="0" >
                  </div>
              </div>
              <div class="ps-scrollbar-y-rail" >
                  <div class="ps-scrollbar-y" tabindex="0" >
                     
                  </div>
              </div>
  
                                                          
                                                       
                              
         <div class="publisher bt-1 border-light">
              <img class="avatar avatar-xs" src="images/NguyenQuangThong_DH51801707.jpg" />
              <input class="publisher-input" type="text" placeholder="Write something" id="newchat"/>
              <span class="publisher-btn file-group">
              <i class="glyphicon glyphicon-paperclip"></i>
              <input type="file"></input>
              </span>
              <a class="publisher-btn" href="" data-abc="true"><i class="glyphicon glyphicon-heart-empty"></i></a>
              <a class="publisher-btn text-info"  data-abc="true" ><i class="glyphicon glyphicon-send" onClick={onclick}></i></a>
  </div>
          </div>
          
              </div>
              </div>
           
         </div>
        </>
        
        );
  
}
export default Chat;