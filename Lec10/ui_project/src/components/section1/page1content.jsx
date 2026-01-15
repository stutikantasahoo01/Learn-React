import LeftContent from "./leftContent"
import RightContent from "./rightContent"


const page1content = () => {
  return (
    <div className="py-10 px-10 flex items-center gap-10 h-[90vh] bg-amber-900 text-amber-50">
      <LeftContent/>
      <RightContent/>
    </div>
  )
}

export default page1content
