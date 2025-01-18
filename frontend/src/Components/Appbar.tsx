import { Avatar } from "./BlogCard"
import { Link } from "react-router-dom"

export const Appbar = () => {

    return (

    <div>
        <div > 
            <div className="border-b flex justify-between px-10  py-4 ">
                <Link to={'/blogs'} className="font-bold text-xl cursor-pointer">
                Medium
                </Link>
                <div className="">
                    <Link to={"/publish"}><button className="rounded-full bg-blue-200 text-white hover:bg-blue-300 focus:ring-blue-300 
                    font-medium py-1 px-2 mr-5"> POST</button></Link>
                    
                    <Avatar name="JL"/>
                </div>
            </div>
        </div>
      
    </div>

  )
}
