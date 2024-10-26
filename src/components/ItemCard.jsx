import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {toast} from 'react-hot-toast'
import { decrementQty, incrementQty , removeFromCart} from "../redux/slices/CartSlice";

function ItemCard( {id, img, name, price, rating, qty} ) {
  // const {id , name , price , img ,qty} = food;
  console.log( id , name , price , img ,qty);

  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-2 mb-3">
      <MdDelete onClick={() => {
        dispatch(removeFromCart({id, img, name, price, qty}));
        toast(`${name} removed !!`, {
          icon: '👏',
        })
      }} className="absolute right-7 text-gray-600 cursor-pointer" />
      {console.log(img)}
      <img src={img} alt="" className="w-[50px] h-[50px]" />
      <div className="leading-3">
        <h2 className="font-bold text-gray-800">{name}</h2>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7 mb-3">
            <AiOutlineMinus
              onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : ( qty = qty)}
              className="border-2 border-grey-600 text-grey-600 hover:text-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus 
            onClick={ () => dispatch(incrementQty({id})) } 
            className="border-2 border-grey-600 text-grey-600 hover:text-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
