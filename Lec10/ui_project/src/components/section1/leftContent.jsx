import 'remixicon/fonts/remixicon.css'
import Herotext from './herotext';
import Arrow from './arrow';
const leftContent = () => {
  return (
    <div className="h-full w-1/3 flex flex-col justify-between">
      <Herotext/>
      <Arrow/>
      
    </div>
  );
};

export default leftContent;
