import React,{useState} from "react";
import axios from 'axios'
const Register=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const onRegister=async (e)=>{
        e.preventDefault()
        await axios.post('http://localhost:4000/register',{
            username,
            password
        })
        setUsername('')
        setPassword('')
    }
    return <div>
       <form onSubmit={onRegister}>
        <div className="form-group">
            <label>Username</label>
            <input type="text" value={username} onChange= {e=>setUsername(e.target.value)} className="form-control"/>
            <label>Password</label>
            <input type="password" value={password} onChange= {e=>setPassword(e.target.value)} className="form-control"/>
            
        </div>
        <button className=" btn btn-primary">Submit</button>
       </form>
    </div>
}

export default Register