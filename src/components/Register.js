import { useState } from "react"
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    uname:'',
    email:'',
    password:'',
  })
  const HandleRegister =  async(e) =>{
    e.preventDefault()
    console.log(data);
    const{uname,email,password} = data
    try {
      const {data} = await axios.post('/register',{
        uname,email,password
      });
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({})
        toast.success("Registered Successfully...")
        navigate('/login')
      }
      
    } catch (error) {
      
    }
  }
  return (
    <div>
    <form onSubmit={HandleRegister}>
        <label>Name</label>
        <input type="text" placeholder="Enter your name..." value={data.uname} onChange={(e)=>setData({...data, uname: e.target.value})}/>
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." value={data.email} onChange={(e)=>setData({...data, email: e.target.value})} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." value={data.password} onChange={(e)=>setData({...data, password: e.target.value})} />

        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Register