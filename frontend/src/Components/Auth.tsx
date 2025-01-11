import { Link } from "react-router-dom"
export const Auth = () => {
  return (
    <div className=" h-screen flex justify-center max-w-screen flex-col items-center bg-blue-200">
        
        <div className="bg-red-400 max-w-md w-full">
       
        <div className="font-bold text-3xl text-center">
        <h1>Create Account </h1>
        </div>
        <div className="flex justify-center gap-1 text-center">
            <h2 className="opacity-50">Already have an Account</h2>
            <Link className=" underline opacity-60" to={"/signin"}>Login</Link>
        </div>
        <div className="flex flex-col py-2 my-2 "  
        >
           
        </div>
        
       
        </div>
        


    </div>
  )
}

type Labelledinputtype={
    label:string,
    placeholder:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

function Labelledinput ({label,placeholder,onChange }:Labelledinputtype) {
   
    return  <div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-lg mb-1">{label}</label>
          <input
            onChange={onChange}
            id="username"
            className="w-3/4 py-2 px-4 rounded-lg border border-gray-300"
            type="text"
            placeholder={placeholder}
          />
        </div>
    </div>
  
}
