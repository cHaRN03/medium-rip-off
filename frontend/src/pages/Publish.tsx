import { Appbar } from "../Components/Appbar"
import axios from "axios"
import { BACKEND_URL } from "../links"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


export const Publish = () => {
const[title,setTitle]=useState("")
const[content,setContent]=useState("")
const navigate=useNavigate()

  return (
    <div>
        
        <div className="flex flex-col min-h-screen bg-white">
  
  <nav className="shadow-md">
  <Appbar/>
  </nav>

  {/* Main Content Area */}
  <div className="flex flex-col flex-grow items-center justify-center px-4">
    <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-8">
      {/* Title Input */}
      <div className="mb-6">
        <label
          htmlFor="titleInput"
          className="block text-2xl font-semibold text-gray-800 mb-4"
        >
          Title
        </label>
        <input
            onChange={(e)=>{setTitle(e.target.value)}}
          id="titleInput"
          type="text"
          placeholder="Enter a captivating title"
          className="w-full border-2 border-gray-300 rounded-lg py-3 px-4 text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      {/* Content Text Area */}
      <div className="mb-6">
        <label
          htmlFor="contentInput"
          className="block text-2xl font-semibold text-gray-800 mb-4"
        >
          Content
        </label>
        <textarea
            onChange={(e)=>{setContent(e.target.value)}}
          id="contentInput"
          placeholder="Start writing your content here..."
          className="w-full h-64 border-2 border-gray-300 rounded-lg py-3 px-4 text-lg text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-200"
        ></textarea>
      </div>

      {/* Publish Button */}
      <div className="flex justify-end">
        <button onClick={async()=>{
            const response=await axios.post(`${BACKEND_URL}/api/v1/blog`,{title,content},
                {headers:{Authorization:localStorage.getItem("token")}})
            navigate(`/blog/${response.data.id}`)
        }}
         className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-200">
          Publish
                    </button>
                </div>
                </div>
            </div>
            </div>


    </div>
  )
}
