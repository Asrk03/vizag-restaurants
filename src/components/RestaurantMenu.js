
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams} from "react-router-dom";
import { IMG_CDN_LINK, ITEMS_IMG_URL } from "../constants";
import Shimmer from "./Shimmer.js";

const defaultImg = "https://cdn-icons-png.flaticon.com/512/2515/2515183.png";

const RestaurantMenu = ()=>{
    const {restaurantId} = useParams();
    const restaurantMenu = useRestaurantMenu(restaurantId);
    
    return (!restaurantMenu)? (
            <Shimmer/>
        ):(
            <>
            
            <div className="flex justify-center mt-8">
                <h2 className="text-3xl font-mono font-bold">MENU</h2>
            </div>
            <div className="flex flex-wrap justify-center mt-8">
                
                {console.log(restaurantMenu)}
                {
                    Object.values(restaurantMenu).map(
                        
                        (items)=>{
                            return(
                                <div key={items.title} className="max-w-md w-full lg:max-w-full lg:flex font-mono">
                                    <div className="flex-none">
                                        <h1 className="font-bold text-3xl ">{items.title}</h1>
                                        {
                                            items?.itemCards?.map((item)=>(
                                                <div key={item.card.info.id} className="flex flex-col md:flex-row items-center p-4">
                                                    <div className="flex-shrink-0 w-48 h-48">
                                                        <img 
                                                            src={`${ITEMS_IMG_URL}${item.card.info.imageId}`}
                                                            className="object-cover w-full h-full rounded-md"
                                                            onError={(e) => {
                                                                e.target.onerror = null;
                                                                e.target.src = defaultImg;
                                                                e.target.className = "object-cover w-full h-full rounded-md bg-gray-200";
                                                            }}
                                                            alt={item.card.info.name}
                                                        />
                                                    </div>
                                                    <div className="p-4 md:w-1/2">
                                                        <h2 className="font-bold text-lg mb-2">{item.card.info.name}</h2>
                                                        <p className="text-gray-700">{item.card.info.description}</p>
                                                        <p className="font-bold">{"Price: Rs."+item.card.info.price/100}</p>
                                                    </div>
                                                </div>    
                                            ))
                                        }
                                    </div>
                                </div>
                            )
                        }
                    )
                }
            </div>
            </>
        )
}

export default RestaurantMenu;
