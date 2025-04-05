import RestaurantCard from "./Restaurantcard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () =>{

const [listofRestaurant, setListofRestaurant] = useState(resList);

    return(
        <div className="body">
            <div className="filter">
             <button className="filter-btn" onClick={() => {
                const filteredlist = listofRestaurant.filter((res) => res.info.avgRating > 4);
                console.log(filteredlist);
                setListofRestaurant(filteredlist);
             }}>Ratings 4.0+</button>
            </div>
            <div className="res-container">
            {
                listofRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData= {restaurant}/>)
            }
            </div>
        </div>
    )
};

export default Body;