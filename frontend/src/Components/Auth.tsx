import { SignupInput } from "@orewanaru/medium-common"
import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"
import { BACKEND_URL } from "../links"

export const Auth = ({type}:{type:"signin" | "signup"}) => {
  const navigate=useNavigate()
  const[Postinputs,setPostinputs]=useState<SignupInput>({
    username:"",
    password:"",
    name:"",
  })

  async function sendrequest(){
    try{const result=await axios.post(`${BACKEND_URL}/api/v1/user/${type ==="signin"?"signin":"signup"}`,Postinputs)
    console.log(result)
    const jwt=result.data
    localStorage.setItem("token",jwt)
    navigate("/blogs")
    }catch(e){alert("choke")}
  }


  return (
    <div className=" h-screen flex justify-center max-w-screen flex-col items-center ">
        
        <div className=" max-w-md w-full py-5 border border-slate-100 shadow-xl hover:scale-105  hover:ring-black duration-300 rounded-xl">
       
        <div className="font-bold text-3xl text-center pr-20">
        <h1>Create Account </h1>
        </div>
        <div className="flex justify-center gap-1 text-center pr-20">
            <h2 className="opacity-50">{type==="signup"?"Already have an Account ?":" Dont have an Account? "}</h2>
            <Link className=" underline opacity-60" to={type === "signup" ? "/signin" : "/signup"} >{type==="signup"?"signin":"signup"}</Link>
        </div>
        <div className="flex flex-col py-2 my-1 pl-9" >
           
           {type==="signup"?<Labelledinput label="Name"  placeholder="Enter Name" onChange={(e)=>{
            setPostinputs(c=>({
              ...c,
              name:e.target.value
            })

            
            )}}/>:null}
            <Labelledinput label="Username"  placeholder="Enter Username" onChange={(e)=>{
            setPostinputs(c=>({
              ...c,
              username:e.target.value
            })

            
            )}}/>

            <Labelledinput label="Password" type={"password"}  placeholder="Enter Password" onChange={(e)=>{
            setPostinputs(c=>({
              ...c,
              password:e.target.value
            })

            
            )}}/>
            <div>{Postinputs.name}</div>
            <button onClick={sendrequest} className=" border border-black w-3/4 mt-6 py-2 rounded-lg bg-black text-white">{type=="signup" ?"Sign Up":"Sign in"}</button>
        </div>

        
        
       
        </div>
        


    </div>
  )
}

type Labelledinputtype={
    label:string,
    placeholder:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    type?:string
}

function Labelledinput ({label,placeholder,onChange,type }:Labelledinputtype) {
   
    return  <div>
        <div className="mb-4">
          <label htmlFor="username" className="block font-semibold mb-1">{label}</label>
          <input
            onChange={onChange}
            
            type={type || "text"}
            className="w-3/4 py-2 px-4 rounded-lg border border-gray-300 shadow-md"
           
            placeholder={placeholder}
          />
        </div>
    </div>
  
}
