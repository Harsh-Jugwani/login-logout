import { useState } from "react"
import axios from 'axios'

const SignIn = () => {
    const [data, setData] = useState({
        email:'',
        password:'',
      })

      const HandleLogin =  (e) =>{
        e.preventDefault()
        console.log(data);
        // axios.get('/')
      }
  return (
    <div>
        <form onSubmit={HandleLogin}>
        <label>Email</label>
        <input type="email" placeholder="Enter your email..." value={data.email} onChange={(e)=>setData({...data, email: e.target.value})} />
        <label>Password</label>
        <input type="password" placeholder="Enter your password..." value={data.password} onChange={(e)=>setData({...data, password: e.target.value})} />

        <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default SignIn