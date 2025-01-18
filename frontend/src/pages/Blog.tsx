
import { FullBlog } from "../Components/FullBlog"
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom"

export const Blog = () => {
  const {id}=useParams()
  const{loading,blog}=useBlog({
    id: Number(id || "")
  })

  if(loading){
    return <div>
      loading...
    </div>
  }

  return (
    <div>
      
     <FullBlog blog={blog??{title:"goat",content:"safe",id:8,author:{name:"charan"}}}/>z
     
    </div>
  )
}
