import {Link } from "react-router-dom"
interface Blogcardtypes{
    authorname:string,
    title:string,
    content:string,
    date:string,
    id:number


}

export const BlogCard = ({authorname,title,content,date,id}:Blogcardtypes) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex ">
            <div className="flex justify-center flex-row pt-0.5 px-1 ">
            <Avatar name={authorname}/>
             

        </div>
        <div className="font-extralight pl-2 pt-0.5">{authorname}</div>

        <div className="font-thin pl-2 text-slate-500 pt-0.5">. {date}</div>

        </div>
       
        <div className="font-bold text-2xl pt-2"> 
            {title}
        </div>
        <div className="font-thin text-md">
            {content.length > 100? content.slice(0,200)+"...": content}
        
        </div>
        <div className="opacity-60 pt-4">
            {`${Math.ceil(content.length/100)} minutes read`}
        </div>
        
    </div>
    </Link>
    
  )
}

export function Avatar({name}:{name:string}){
    return (
       
    <div className="relative inline-flex items-center justify-center w-7 h-6 overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600">
        <span className="font-xs text-gray-600 dark:text-gray-300">{name.slice(0,2)}</span>
    </div>

    )
}
