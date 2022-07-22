
import React, {Component}  from "react";
import './chat.css';
class BodyMess extends Component{
    render(){
        console.log(this.props);
        console.log(this.props.item.type);
        if(this.props.item.type == 'user'){
            return(
             
                 <>
        
    
        
    
                 <div class="media media-chat media-chat-reverse">
                 <div class="media-body">
                     <p>{this.props.item.message}</p>
                     <p class="meta">{this.props.item.time}</p>
                 </div>
                 </div>
                     </>
            );
        }
        else{
            return(
                <>
                <div class="media media-chat">
    
                <div class="media-body">
                    <p>{this.props.item.message}</p>
                    <p class="meta">{this.props.item.time}</p>
                </div>
                </div>
        
            
        
                    </>
            );
        }
       
    }
}
export default BodyMess;