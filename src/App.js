import { Routes,Route } from "react-router-dom";
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Navbar from './components/Navbar'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <div className="text-center">
            {/* <Login/>   */}
            <Navbar/>
            <Toaster position="bottom-right" toastOptions={{duration:2000}}/>
            <Routes>
              <Route path="/" element = {<Home/>} />
              <Route path="/register" element = {<Register/>} />
              <Route path="/login" element = {<SignIn/>} />
              
            </Routes>
    </div>
  );
}

export default App;
