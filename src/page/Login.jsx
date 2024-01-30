
import { useState } from "react";
import useAuth from "../hooks/useAuth";


const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const {login,user}=useAuth()
    console.log(user)
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(email,password)
        try{
            await login(email,password)
            console.log("logged in")
        }
        catch(err){
            console.log(err)
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col xl:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">login now!</h1>
                    
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" onBlur={(e)=>setEmail(e.target.value)} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered"
                            onBlur={(e)=>setPassword(e.target.value)} required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;