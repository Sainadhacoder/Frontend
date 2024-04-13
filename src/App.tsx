import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Home/NavBar";
import Home from "./Components/Home/Home";
import Products from "./Components/Home/Products";
import Profile from "./Components/Home/Profile";
import AboutUs from "./Components/Home/AboutUs";
import Login from "./Components/Home/Login";
import Signup from "./Components/Home/Signup";
import Buy2 from "./Components/Home/Buy2";
//import Buy2 from "./Components/Home/buy2";

function App() {
  return (
    <div>
      <NavBar/>
      <BrowserRouter>
      <Routes>  
      <Route path="/loginUser" element={<Login />}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/prd" element={<Products />}></Route>
      <Route path="/prd/buy2" element={<Buy2/>}></Route>

      <Route path="/pro" element={<Profile />}></Route>
      <Route path="/ab" element={<AboutUs />}></Route>
      


      </Routes>
      </BrowserRouter>
      <footer>
        <div className="bg-secondary border border-0 border-secondary  border-secondary-subtle">
          <p className="p-5 mb-5 mt-5 bg-secondary-subtle ">
            <h3>
              <center>
                <b>E-Products</b>
              </center>
            </h3>
            <br />
            <b>Best Products</b> – Compare to Other Websites here we sell our Product in less price.
            <br />
            <br />
            <b>Contact Us:</b>
            <br />
            E-Products Web Services Pvt Ltd, 140, Sector – D, Sudama Nagar,
            Indore, 452009 Madhya Pradesh, India
            <br />
            720 University Avenue, Suite 120, Los Gatos, CA 95032, USA
            <br />
            Email: info@e-products.Selling
            <br />
            <b>phone no: 9767545321</b>
          </p>
          <div className="bg-dark border border-0 border-dark  border-dark-subtle text-white">
          <p><center>E-products © 2024. All Rights Reserved.</center></p>
          </div>
          </div>
          </footer>
    </div>
    
  );
}

export default App;