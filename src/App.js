import logo from './logo.svg';
//import './App.css';

import Footer from './Components/footer';
import Content from './Components/content';
import IconChat from './Components/chat/iconChat';
import Banner from './Components/banner';
import DieuHuong from './router/dieuhuong';
import Header from './Components/header/header';

function App() {
  let icon=true;
  return (
    <div className="App" >
      <Header/>

         <DieuHuong/>
       <IconChat/>
     
      <Footer/>
    </div>
  );
}

export default App;
