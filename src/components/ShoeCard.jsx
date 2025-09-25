import React from "react";

const ShoeCard = ({shoeitem, theme, handleAddToCart }) => {
  return (
    <>
      <div
        className={`w-82 h-80  ${
          theme ? "bg-white border-zinc-200" : "bg-zinc-500/50 border-gray-500"
        } flex items-center border  rounded-md flex flex-col p-3 gap-4`}
      >
        <div className="h-40 w-full flex items-center justify-center">
          <div
            className={`w-40 h-40 border border-dashed ${
              theme ? "border-zinc-300" : "border-gray-400"
            } rounded-md bg-zinc-500`}
          >
            <img
              src={shoeitem.image}
              className="h-full object-cover w-full rounded-md"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="">
            <p className="font-semibold text-lg">{shoeitem.title}</p>
            <p className={`${theme ? "text-gray-700" : "text-gray-300"}`}>
              ₹{shoeitem.price}
            </p>
          </div>

          <div>
            <button
              onClick={() => {shoeitem.cartQuantity == 0 ? handleAddToCart(shoeitem) :alert("item added already")}}
              className={`${shoeitem.cartQuantity == 0 ? "bg-[#161e2e]" : "bg-green-500 cursor-not-allowed"} text-white w-full px-20 py-2 rounded-md `}
            >
              {shoeitem.cartQuantity == 0 ? "Add To Cart" : "Added to cart"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoeCard;
