import React, { useRef, useState } from 'react';
import { checkValidData} from '../utils/validate'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';




const Login = () => {

    
    const[Toggle,setToggle] = useState(false);
    const [Error, setError] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    // const handleClick = ()=>{
    //   setToggle(!Toggle);
    // }
  
  
    // const email = useRef(); 
    // const name = useRef();
    // const password = useRef();
    
    const handleCheckValidation = async()=>{
      const message = checkValidData(email,password);
      setError(message)
      if(message) return
    
      if(!Toggle){
     
      }
    }
    const handleSubmit = async(e) =>{
      e.preventDefault();
      
      axios.post('mongodb://localhost:27017/register',{name,email,password})
      .then(result=>console.log(result))
      .catch(err=>console.log(err))
       

    }
    
  





  return (
    <div>
 
        <div className='flex justify-between border-b-4 items-center '>
       
        </div>
    <div>
        <form className='h-auto  md:w-3/12 w-9/12 bg-black m-36 mt-20 mx-auto right-0 left-0 bg-opacity-75 rounded-xl absolute' onSubmit={handleSubmit}>
            <h3 className='p-5 text-red-800 font-bold text-2xl md:text-xl cursor-pointer'>{Toggle?"Sign In":"Sign Up"}</h3>
            
            {!Toggle && <input className='mx-6 my-3 p-2 bg-slate-500 rounded-lg' type="text" placeholder='Enter Name' name='username' onChange={(e)=>setName(e.target.value)} />}
            <input className='mx-6 my-3 p-2 bg-slate-500 rounded-lg' type="email" placeholder='Enter Email' name='email' onChange={(e)=>setEmail(e.target.value)}  />
            <input className='mx-6 my-3 p-2 bg-slate-500 rounded-lg' type="password" placeholder='Password' name='password' onChange={(e)=>setPassword(e.target.value)}  />
            <button type='submit' className='mx-6 my-3 p-2 bg-blue-700 rounded-lg' onClick={handleCheckValidation}>Submit</button>
            <p className='text-red-600 px-6'>{Error}</p>
            <p className='p-4 text-green-700' >{Toggle?"Are you new,Let's Sign Up":"Already registered?Sign in Now."}</p>
        </form>
    </div>
    </div>
  )
}


export default Login