import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MenuAPIUrl } from "../utils/constant";

const RestaurantItems = () =>{

    const[resInfo,setResInfo] = useState(null);

    const {resid}= useParams();

    useEffect(()=>{
        fetchMenuItems();
    },[]);

    const fetchMenuItems = async() => {
    const data = await fetch(MenuAPIUrl+ resid);
    
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
};

  if(resInfo == null) return <Shimmer/>;

//   console.log(resInfo);
  const {name,costForTwoMessage,cuisines,avgRating} =resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card;
//   console.log(resInfo);
//    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card);
//   resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.card?.info
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards[3]?.card);
    //  console.log(resInfo?.cards[2]?.card?.card?.info?.name);
    // const {name} = resInfo?.cards[0]?.card?.card?.text;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h4>{avgRating}</h4>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(res => <li key={res?.card?.info?.id}>{res?.card?.info?.name} : {"Rs. "}{res?.card?.info?.defaultPrice/100}</li>)}
            </ul>

        
        </div>
    )
}

export default RestaurantItems;