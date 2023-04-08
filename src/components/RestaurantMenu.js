import useRestaurantMenu from "../utils/useRestaurantMenu";
import {useParams} from "react-router-dom";
import { IMG_CDN_LINK, ITEMS_IMG_URL } from "../constants";
import Shimmer from "./Shimmer.js";

const RestaurantMenu = ()=>{
    const {restaurantId} = useParams();
    
    const restaurantMenu = useRestaurantMenu(restaurantId);
    console.log(restaurantMenu)
    return (!restaurantMenu)? (
            <Shimmer/>
        ):(
            <>
            <div className = "menu content-center">
                <h2>MENU</h2>
                <ul className = "flex-wrap gap-8">
                    {
                        Object.values(restaurantMenu).map(
                            (items)=>{
                                return(
                                    <div >
                                        <h1 className="font-bold text-2xl">{items.title}</h1>
                                            {
                                                items?.itemCards?.map((item)=>(
                                                    <li key = {item.card.info.id} className="">
                                                        <div className="flex flex-col md:flex-row items-center p-4">
                                                            <div className="flex-shrink-0 w-200">
                                                                <img src ={ITEMS_IMG_URL +  item.card.info.imageId } className="object-cover w-full h-200 "/>
                                                            </div>
                                                            <div class="p-4 md:w-1/2">
                                                                <h2 className="font-bold text-lg mb-2">{item.card.info.name}</h2>
                                                            </div>
                                                        </div>
                                                            
                                                    </li>    
                                                    )
                                                )
                                            }
                                        </div>
                                    )
                                }
                            )
                    }
                </ul>
            </div>
            </>
    )
}

export default RestaurantMenu;
