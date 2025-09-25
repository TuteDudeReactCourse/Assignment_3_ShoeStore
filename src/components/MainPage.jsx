import React, { useState } from "react";
import ShoeCard from "./ShoeCard";
import ShoppingCart from "./ShoppingCart";

const MainPage = ({
  cartitems,
  setCartitems,
  theme,
  iscartopen,
  handlecartopen,
}) => {
  const shoes = [
    {
      id: 1,
      title: "Nike Air Zoom",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
      cartQuantity: 0,
    },
    {
      id: 2,
      title: "Adidas Ultraboost",
      price: 150,
      image:
        "https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dw0221f8fb/images/2024-Images/Q2/SKX62403%20Shop%20by%20Style%20Grid%20Environmental%20Shots%20Spring-Summer%202024_Mens_750x664-Slip-ins%20210606WNVY.jpg?sw=356",
      cartQuantity: 0,
    },
    {
      id: 3,
      title: "Puma RS-X",
      price: 100,
      image:
        "https://rukminim2.flixcart.com/image/704/1056/xif0q/shoe/p/g/r/8-grey-8-roaster-grey-original-imahcd2yy2gmgues.jpeg?q=90&crop=false",
      cartQuantity: 0,
    },
    {
      id: 4,
      title: "Reebok Classic",
      price: 90,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE9S3IwSmM7SjRvsRdWotuhEKmtY9JPIwAgQ&s",
      cartQuantity: 0,
    },
    {
      id: 5,
      title: "Converse Chuck 70",
      price: 85,
      image:
        "https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg",
      cartQuantity: 0,
    },
    {
      id: 6,
      title: "New Balance 550",
      price: 110,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvHJDTOecTY8Zbgmz4rmk8058mrNMII9GCvw&s",
      cartQuantity: 0,
    },
  ];

  const [shoesdata,setShoesdata] = useState(shoes)

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
        ${theme ? "bg-white" : "bg-gray-800"} p-4 rounded-md
        h-64 md:h-auto overflow-y-auto
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

  
  <div className={`
    ${iscartopen ? "md:col-span-3" : "md:col-span-4"} 
    flex flex-col gap-6 order-2 md:order-1 
  `}>
    
    
    <div className="w-full py-8 flex flex-col gap-4">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center">Discover Your Perfect Pair</h1>
      <p className="text-center text-zinc-700">Explore our collection of premium footwear for every occasion. Quality, comfort, and style in every step.</p>
    </div>

    
    <div className="flex flex-col gap-4">
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
