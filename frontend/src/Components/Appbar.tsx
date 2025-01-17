import { Avatar } from "./BlogCard"
export const Appbar = () => {

    return (

    <div>
        <div > 
            <div className="border-b flex justify-between px-10  py-4">
                <div className="font-bold text-xl">
                    Medium
                </div>
                <div>
                    <Avatar name="JL"/>
                </div>
            </div>
        </div>
      
    </div>

  )
}
