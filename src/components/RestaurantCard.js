import { IMG_CDN_LINK } from "../constants";

const RestaurantCard = ({
    name,
    cloudinaryImageId,
    totalRatingsString,
    avgRating,
    cuisines
})=>{
    return (
        <div className="w-[300px] p-2 m-2 grid-cols-3 gap-4 font-mono">
            <img className="rounded-lg border mb-2" src={IMG_CDN_LINK+cloudinaryImageId}/>
            <h2 className="font-bold text-lg">{name}</h2>
            <p>{avgRating + " stars"}</p>
            <h2>{totalRatingsString}</h2>
            <h3>{cuisines.join(", ")}</h3>
        </div>
    )
}

export default RestaurantCard;