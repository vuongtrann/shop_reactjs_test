import React,{Component} from 'react'
class Footer extends Component{
  
  render(){
    return(
        <div class="footer">
        <div class="footer-middle">
                    <div class="container">
                        <div class="col-md-3 footer-middle-in">
                            <a href="index.php"><img src="image/logo2.png" alt=""/></a>
                            <p>Thể dục thể thao là một phần không thể thiếu trong cuộc sống con người. Không chỉ giúp chúng ta rèn luyện sức khỏe mà còn giải tỏa được sự căng thẳng, mệt mỏi sau ngày dài làm việc. Để quá trình chơi các môn thể thao được tốt hơn, đạt hiệu quả như mong muốn không thể nào thiếu các bộ trang phục thể thao phù hợp được in các câu slogan ấn tượng, độc đáo.</p>
                        </div>
                        
                        <div class="col-md-3 footer-middle-in">
                            <h6>Thông tin </h6>
                            <ul class=" in">
                            
                                <li><a href="#">Returns</a></li>
                                <li><a href="contact.php">Site Map</a></li>
                            </ul>
                            <ul class="in in1">
                                <li><a href="#">Order History</a></li>
                                <li><a href="wishlist.php">Wish List</a></li>
                                <li><a href="login.php">Login</a></li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="col-md-3 footer-middle-in">
                            <h6>Tags</h6>
                            <ul class="tag-in">
                                <li><a href="#">Lorem</a></li>
                                <li><a href="#">Sed</a></li>
                                <li><a href="#">Ipsum</a></li>
                                <li><a href="#">Contrary</a></li>
                                <li><a href="#">Chunk</a></li>
                                <li><a href="#">Amet</a></li>
                                <li><a href="#">Omnis</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 footer-middle-in">
                            <h6>Newsletter</h6>
                            <span>Sign up for News Letter</span>
                                <form>
                                    <input type="text" value="Enter your E-mail" onfocus="this.value='';" onblur="if (this.value == '') {this.value ='Enter your E-mail';}"/>
                                    <input type="submit" value="Subscribe"/>	
                                </form>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <ul class="footer-bottom-top">
                            <li><a href="#"><img src="images/f1.png" class="img-responsive2" alt=""/></a></li>
                            <li><a href="#"><img src="images/f2.png" class="img-responsive2" alt=""/></a></li>
                            <li><a href="#"><img src="images/f3.png" class="img-responsive2" alt=""/></a></li>
                        </ul>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>
      );
  }
}
export default Footer;