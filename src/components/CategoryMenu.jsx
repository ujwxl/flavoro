import React, { useEffect, useState } from "react";
import Fooddata from "../data/foodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

function CategoryMenu() {
  const [categories, setCategories] = useState([]);

  const listUniqueCategory = () => {
    let uniqueCategories = Fooddata.map((food) => food.category);
    uniqueCategories = [...new Set(uniqueCategories)];
    console.log(uniqueCategories);
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    console.group(categories);
    listUniqueCategory();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.category.category
  );

  return (
    <div className="ml-6">
      <h3>Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryMenu;
