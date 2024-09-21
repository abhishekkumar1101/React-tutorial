import { woym_URL } from "../utils/contants";
const BelowHeaderElement = (props) => {
  const { woymItems } = props;
 // console.log(woymItems);
 if(woymItems) console.log(woymItems.length);
  
  
  if (woymItems) 
    return (
   <div >
    <div className="mx-13">
      <div className="flex flex-row"> 
        <div className="">
          <img className="w-36 " src={woym_URL+woymItems.imageId} alt="Restaurant" />
        </div>
      </div>
    </div>
    </div>
    );
};
export default BelowHeaderElement;