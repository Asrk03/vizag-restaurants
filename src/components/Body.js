import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useRestaurantFilter } from "../utils/useRestaurantMenu";
import useIsOnline from "../utils/useIsOnline";

const Body = ()=>{
    const ifOnline = useIsOnline();
    const [filteredRestaurants, searchInput, setSearchInput] = useRestaurantFilter();
    if(!ifOnline)return <h1>Offline</h1>;
    if(!filteredRestaurants)return <Shimmer/>;
    return (
        <>
            <div className="font-mono search-container flex justify-center mt-3 mb-2">
                <input 
                    type = "text" 
                    className="font-sans search-input border rounded p-2 mr-4" 
                    placeholder = "search for restaurant's" 
                    value={searchInput}
                    onChange = {(e)=>{
                        setSearchInput(e.target.value);
                    }
                }
            />
                <button className="transition ease-in-out delay-150 bg-slate-200 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-md pl-4 pr-4">Search</button>
            </div>
            {filteredRestaurants.length === 0 ? (
                <h2>NO SUCH RESTAURANTS</h2>
            ) : (
                <div className="flex flex-wrap place-content-center">
                    {filteredRestaurants.map((restaurant) => (
                        <Link className="border rounded-md m-1 links hover:shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-200 duration-0 " to = {"/restaurant/"+ restaurant.data.id} key={restaurant.data.id}>
                            <RestaurantCard {...restaurant.data} />
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}



export default Body;