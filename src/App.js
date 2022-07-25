import Header from "./Component/fisrt/Header";
import {
Routes,
  Route
  
} from "react-router-dom"
import Login from "./Component/login/Login";
import Home from "./Component/home/Home";
function App() {
  return (
    <>
    <Routes>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/" element={<Header/>}/>
     <Route path="/Home" element={<Home/>}/>
    
    </Routes>
    </>
  );
}

export default App;
