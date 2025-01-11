import { Quotes } from "../Components/Quotes"
import { Auth} from "../Components/Auth"

export const Signup = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <div>
        <Auth/>
      </div>
      <div className="hidden md:block">
      <Quotes/>
      </div>
      

    </div>
  )
}
