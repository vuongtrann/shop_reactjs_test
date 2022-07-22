import React from "react";


const Contact=()=>{
 return(
    <>
    <div className="banner-top">
            <div className="container">
                <h1>Liên hệ</h1>
                <em></em>
                <h2><a href="index.html">Trang chủ</a><label>/</label>Liên hệ</h2>
            </div>
        </div>
        <div class="contact">
					
               <div class="contact-form">
                  <div class="container">
                  <div class="col-md-6 contact-left">
                     <h3>At vero eos et accusamus et iusto odio dignissimos ducimus qui </h3>
                     <p>Trái với suy nghĩ của nhiều người, Fashion Sport không chỉ đơn giản là văn bản ngẫu nhiên. Nó có nguồn gốc từ một tác phẩm văn học Latinh cổ điển từ năm 45 trước Công nguyên, đã tồn tại hơn 2000 năm </p>
                  
            
                  <div class="address">
                  <div class=" address-grid">
                        <i class="glyphicon glyphicon-map-marker"></i>
                        <div class="address1">
                           <h3>Địa chỉ</h3>
                           <p>Mỹ Phụng - Xuân Lộc - Sông Cầu - Phú Yên</p>
                        </div>
                        <div class="clearfix"> </div>
                     </div>
                     <div class=" address-grid ">
                        <i class="glyphicon glyphicon-phone"></i>
                        <div class="address1">
                        <h3>Điện Thoại</h3>
                           <p>+0339647045</p>
                        </div>
                        <div class="clearfix"> </div>
                     </div>
                     <div class=" address-grid ">
                        <i class="glyphicon glyphicon-envelope"></i>
                        <div class="address1">
                        <h3>Email:</h3>
                           <p><a href="mailto:info@example.com"> quangthong1610@gmail.com</a></p>
                        </div>
                        <div class="clearfix"> </div>
                     </div>
                     <div class=" address-grid ">
                        <i class="glyphicon glyphicon-bell"></i>
                        <div class="address1">
                           <h3>Giờ mở cửa:</h3>
                           <p>Thứ 2 - Thứ 7, 7AM-5PM</p>
                        </div>
                        <div class="clearfix"> </div>
                     </div>
   </div>
               </div>
               <div class="col-md-6 contact-top">
                  <h3>Bạn muốn liên hệ với tôi ? </h3>
                  <form>
                     <div>
                        <span>Tên của bạn</span>		
                        <input type="text" value="" />						
                     </div>
                     <div>
                        <span>Email của bạn </span>		
                        <input type="text" value="" />						
                     </div>
                  
                     <div>
                        <span>Tin nhắn của bạn</span>		
                        <textarea> </textarea>	
                     </div>
                     <label class="hvr-skew-backward">
                           <input type="submit" value="Gửi" />
                     </label>
   </form>						
               </div>
         <div class="clearfix"></div>
         </div>
         </div>
         <div class="map">
                     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37494223.23909492!2d103!3d55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x453c569a896724fb%3A0x1409fdf86611f613!2sRussia!5e0!3m2!1sen!2sin!4v1415776049771"></iframe>
                  </div>
      </div>
   
    </>
 )
}
export default Contact;
