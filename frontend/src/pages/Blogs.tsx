import { Appbar } from "../Components/Appbar"
import { BlogCard } from "../Components/BlogCard"
import { useBlogs } from "../hooks"

export const Blogs = () => {

  const {loading,blogs}=useBlogs();
  if(loading){
    return <div>loading...</div>
  }

  return (    
    <div>
    <Appbar/>
        <div className="flex justify-center">
      
          <div >
            {blogs.map((par)=>{return (
              <BlogCard 
                id={par.id}
              authorname={par.author.name || "anonymous"} date="03/06/03" content={par.content}  title={par.title}/>
              )
            })}
      
        
        
            </div>
        </div>
    </div>
  )
}
