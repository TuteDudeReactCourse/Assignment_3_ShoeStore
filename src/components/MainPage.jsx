import React, { useState } from "react";
import ShoeCard from "./ShoeCard";
import ShoppingCart from "./ShoppingCart";
import shoes from "../data/shoesData"

const MainPage = ({
  cartitems,
  setCartitems,
  theme,
  iscartopen,
  handlecartopen,
}) => {
 
  const [shoesdata, setShoesdata] = useState(shoes);

  const handleAddToCart = (shoeitem) => {
    shoeitem.cartQuantity = shoeitem.cartQuantity + 1;
    setCartitems((prevItems) => [...prevItems, shoeitem]);
  };

  return (
    <div className="px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-4">
      {iscartopen && (
        <div
          className={`
        w-full md:col-span-1
        ${theme ? "bg-white" : "bg-gray-800"} p-4  rounded-md
        h-96 md:h-auto md:max-h-[60%] overflow-y-auto
        order-1 md:order-2 
      `}
        >
          <ShoppingCart
            shoesdata={shoesdata}
            setShoesdata={setShoesdata}
            theme={theme}
            cartitems={cartitems}
            setCartitems={setCartitems}
            handlecartopen={handlecartopen}
          />
        </div>
      )}

      <div
        className={`
    ${iscartopen ? "md:col-span-3" : "md:col-span-4"} 
    flex flex-col gap-6 order-2 md:order-1 
  `}
      >
        <div className="w-full  py-8 flex flex-col gap-4">
          <h1 className="text-3xl sm:text-4xl font-semibold text-center">
            Discover Your Perfect Pair
          </h1>
          <p className="text-center text-zinc-700">
            Explore our collection of premium footwear for every occasion.
            Quality, comfort, and style in every step.
          </p>
        </div>

        <div className="flex flex-col gap-4  p-2">
          <p className="font-semibold text-xl">Featured Shoes</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {shoesdata.map((shoeitem) => (
              <ShoeCard
                shoesdata={shoesdata}
                setShoesdata={setShoesdata}
                theme={theme}
                shoeitem={shoeitem}
                key={shoeitem.id}
                title={shoeitem.title}
                price={shoeitem.price}
                image={shoeitem.image}
                handleAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
