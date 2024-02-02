import CreatePost from "./CreatePost"
import Postfeed from "./Postfeed"


const CenterFeed = () => {
  return (
    <div className="h-full  lg:col-span-2  sz:col-span-1 xm:col-span-1 order-1 sz:order-2 xm:order-2  space-y-5">

      <CreatePost/>
      <Postfeed/>
              
    </div>
  )
}

export default CenterFeed
