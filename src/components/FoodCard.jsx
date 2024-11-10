import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

function FoodCard({id, img, name, price, desc, rating, qty, handleToast}) {

console.log(id, img, name, price, desc, rating, qty)
  const dispatch = useDispatch();

  return (
    <div
      className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2 justify-between"
      key={id}
    >
      <img
        className="w-auto h-[130px] overflow-hidden hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
        src={img}
        alt=""
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500 ">{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0,50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button onClick={() => {dispatch(addToCart({id, name, price, img , qty : 1})), handleToast(name)}} className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-md text-sm pt-1.5 pb-1.5 pl-3 pr-3">
          Add to cart
        </button>
      </div>
    </div>
  );
}

// id: 20,
// img: "https://w7.pngwing.com/pngs/435/847/png-transparent-pincho-canape-skewer-fruit-others-thumbnail.png",
// name: "Fruit Skewers",
// price: 70,
// desc: "Indulge in a colorful assortment of fruit skewers featuring juicy chunks of melon, berries, pineapple, and more. A sweet and refreshing snack that's both delicious and visually appealing.",
// category: "Snacks",
// rating: 4.8,

export default FoodCard;
