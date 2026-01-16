import Rightcard from "./Rightcard";

const rightContent = (props) => {
  console.log(props.users);

  return (
    <div id='right' className="h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3">
      {props.users.map(function (el,idx) {
        return <Rightcard key={idx} id={idx} img={el.img} tag={el.tag}/>;
      })}
    </div>
  );
};

export default rightContent;
