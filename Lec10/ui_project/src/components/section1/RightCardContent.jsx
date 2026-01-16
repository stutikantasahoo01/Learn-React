

const RightCardContent = (props) => {
  return (
     <div className="h-full w-full absolute left-0 top-0 p-8 flex flex-col justify-between">
        <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center font-semibold text-xl">
          {props.id+1}
        </h2>
        <div>
          <p className="text-xl leading-relaxed text-white mb-14 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
            ipsum.
          </p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-3 py-2 rounded-full'> {props.tag}</button>
            <button>
              <i className="ri-arrow-right-line bg-blue-600 text-white font-medium px-3 py-2 rounded-full"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
