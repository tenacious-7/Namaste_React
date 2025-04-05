import { CDN_URL } from "../utils/constant"; 

const RestaurantCard =(props)=>{
    const {resData} = props;
    const {name,cuisines,costForTwo,avgRating,sla,cloudinaryImageId} = resData?.info;
    const {deliveryTime} = sla;
    
    return(
        <div className="res-card">
            < img className="res-img" alt="res-logo" src ={ CDN_URL + cloudinaryImageId }  />
        <h3>{name}</h3>
        <h5>{cuisines.join(",")}</h5>
        <h5>{avgRating}</h5>
        <h5>{costForTwo}</h5>
        <h5>{deliveryTime} mins</h5>
        </div>
    )
    };

    export default RestaurantCard;