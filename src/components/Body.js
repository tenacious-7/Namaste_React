import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () =>{

const [listofRestaurant, setListofRestaurant] = useState([]);
const [filteredRestaurant, setFilteredRestaurant] = useState([]);
const [searchText, setsearchText] = useState("");

useEffect(()=>{
    fetchData();
},[]);

const fetchData  = async() => {
    const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8921871&lng=81.0595961&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    const restaurants = json?.data?.cards?.find(
        (c) =>
          c?.card?.card?.gridElements?.infoWithStyle?.restaurants !== undefined
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  
      setListofRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
};

if(listofRestaurant.length==0){
    return(<Shimmer/>)

}
    return(
        <div className="body">
            <div className="filter">
            <div className="search">
            <input type ="text" className="search-box" value ={searchText} onChange={(e)=>{ setsearchText(e.target.value)}}/>
            <button onClick={() => {
                const filteredlist = listofRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilteredRestaurant(filteredlist);
            }}>Search</button>
            </div>
             <button className="filter-btn" onClick={() => {
                const filteredlist = listofRestaurant.filter((res) => res.info.avgRating > 4);
                console.log(filteredlist);
                setListofRestaurant(filteredlist);
             }}>Ratings 4.0+</button>
            </div>
            <div className="res-container">
            {
                filteredRestaurant.map(restaurant => <RestaurantCard key={restaurant.info.id} resData= {restaurant}/>)
            }
            </div>
        </div>
    )
};

export default Body;