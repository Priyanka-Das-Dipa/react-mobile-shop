import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";
import FavoriteCart from "./FavoriteCart";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const [noFound, setNotfound] = useState("");
  const [isShow, setIsShow] = useState("");

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites"));
    if (favoriteItems) {
      setFavorites(favoriteItems);
      const total = favoriteItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0)
      setTotalPrice(total)
    } else {
      setNotfound("No Data Found!");
    }
  }, []);

  // delete all the data from localstroage

  const handleRemove = () =>{
    localStorage.clear()
    setFavorites([])
    setNotfound("No Data Found!")
  }

  return <div>{noFound ? 
  
  <p className="flex justify-center items-center h-[60vh] text-5xl font-semibold">{noFound}</p> : 
  
    <div>
      {
      favorites.length > 0 && (<div>
        <button onClick={handleRemove} className="btn bg-green-200 block mb-5 mx-auto"> Delete All Favorite</button>
        <h2>Total Price: {totalPrice.toFixed(2)}</h2>
      </div>)
      
      }
     

      <div className="grid grid-cols-2 gap-7">
        {
          isShow? favorites?.map(phone => (<FavoriteCart key={phone.id} phone={phone}></FavoriteCart>)) : favorites?.slice(0, 4).map(phone => (<FavoriteCart key={phone.id} phone={phone}></FavoriteCart>))

        
        } 
      </div>

      {
        favorites.length > 2 && <button onClick={()=>setIsShow(!isShow)} className="btn bg-green-200 block mt-5 mx-auto">{isShow ? "See Less" : "See More" } </button>
      }
    </div>
  
  }
  
  
  </div>;
};

export default Favorite;
