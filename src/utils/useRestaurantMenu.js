import { useEffect, useState } from "react";
import { MENU_URL, MORE_RESTAURANTS, WEB_LISTING_URL } from "../constants";
import { filterData } from "./Helper.js";

const useRestaurantMenu = (restaurantId)=>{
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    useEffect(()=>{
        getRestaurant();
    },[])
    async function getRestaurant(){
        const data = await fetch( MENU_URL + restaurantId)
        const json = await data.json();
        const itemCategory = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
        const menu = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        const item = menu?.map(item => {
            if(item.card.card["@type"] === itemCategory)return item.card.card;
        })
        const newitem = item.filter(value=>value !== undefined)
        setRestaurantMenu(newitem);
    }
    return restaurantMenu;
}

export const useRestaurantWebListing = () => {
    const [restaurants, setRestaurants] = useState(null);
    
    useEffect(() => {
        async function getRestaurants() {
            const data = await fetch(WEB_LISTING_URL);
            const real = await data.json();
            const kards = real?.data?.cards.map((card)=>{
                if(card.cardType == "seeAllRestaurants")return card.data.data.cards;
            })
            const kaards = kards.filter(value=>value != undefined);
            setRestaurants(...kaards);
        }
        getRestaurants();
    }, []);
    return restaurants;
  };
    
export const useRestaurantFilter = () => {
    const restaurants = useRestaurantWebListing();
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    
    useEffect(() => {
        if (restaurants) {
            setFilteredRestaurants(restaurants);
        }
    }, [restaurants]);
    
    useEffect(() => {
        if (restaurants) {
            const data = filterData(searchInput, restaurants);
            setFilteredRestaurants(data);
        }
    }, [searchInput, restaurants]);
    
    return [filteredRestaurants, searchInput, setSearchInput];
};


export default useRestaurantMenu;