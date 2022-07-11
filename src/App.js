
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./Home"
import Register from './Register';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from './Login';
import Slider from './Slider';
import Poducts from './Poducts';
import Mens_cloth from './Cloth/Mens_cloth';
import Womens_cloth from './Cloth/Womens_cloth';
import Electronics from './Cloth/Electronics';
import Jwel from './Cloth/Jwel';
import Navbar from "./Navbar"
import Navbar_new from './Navbar_new';
import Orders from './Orders';
import Nav from './Nav';
import Nav_1 from './Newnav';



function App() {
  return (
    <div className="pp">
      <Nav_1/>

  
                <ToastContainer closeButton={false}  position="top-right" />
              
          
           

                <Routes>
                <Route path = "/" element={<Register/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Products'element={<Poducts/>}/>
                <Route path="/Mens_cloth" element={<Mens_cloth/>}/>
                <Route path='/womes_cloth' element={<Womens_cloth/>}/>
                <Route path='/electroics' element={<Electronics/>}/>
                <Route path='/jewelery' element={<Jwel/>}/>
                <Route path='/Orders' element={<Orders/>}/>

                </Routes>
   
    </div>
  );
}

export default App;
