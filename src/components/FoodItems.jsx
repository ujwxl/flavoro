import React from "react";
import FoodData from "../data/foodData";
import FoodCard from "./FoodCard.jsx";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function FoodItems() {
  const handleToast = (name) => {
    toast.success(`${name} added to cart`);
  };
  const search = useSelector((state) => state.search.search);
  console.log("search", search)
  const category = useSelector((state) => state.category.category);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return food.category === category && food.name.toLowerCase().includes(search.toLowerCase());
          }
        }).map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
}

export default FoodItems;
