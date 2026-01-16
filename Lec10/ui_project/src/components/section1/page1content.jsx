import LeftContent from "./leftContent"
import RightContent from "./rightContent"


const page1content = (props) => {
  
  return (
    <div className="py-10 px-18 flex items-center gap-10 h-[90vh] ">
      <LeftContent/>
      <RightContent users={props.users} />
    </div>
  )
}

export default page1content
