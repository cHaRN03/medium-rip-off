import { Blog } from "../hooks"
import { Appbar } from "./Appbar"


export const FullBlog = ({blog}:{blog:Blog} ) => {
  return (
    <div>
        <Appbar/>
        <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-h-2xl max-w-screen-2xl pt-12">

            <div className="col-span-8 ">
            <div className="text-3xl font-extrabold ">
                {blog.title}
            </div>
            <div className="text-slate-200 pt-4">
                POsted on 2nd december
            </div>
            <div className="pt-2">
                {blog.content}
            </div>
            </div>

            <div className="col-span-4">
            <div className="text-slate-600">Author</div>
            <div className="flex"></div>
            <div className="text-xl font-bold">{blog.author.name || "Anonynmous"}</div>
            
            <div className="pt-2">
                the GOAT Author
            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}
