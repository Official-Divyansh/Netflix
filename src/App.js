import Header from "./Component/fisrt/Header";
import {
Routes,
  Route
  
} from "react-router-dom"
import Login from "./Component/login/Login";
function App() {
  return (
    <>
    <Routes>
     <Route path="/Login" element={<Login/>}/>
     <Route path="/" element={<Header/>}/>
    
    </Routes>
    </>
  );
}

export default App;
