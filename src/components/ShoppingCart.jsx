import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const ShoppingCart = ({ cartitems, setCartitems, handlecartopen,theme }) => {
  const handleaddbtn = (cartitemindex) => {
    setCartitems(() =>
      cartitems.map((item, index) =>
        index == cartitemindex
          ? { ...item, cartQuantity: item.cartQuantity + 1 }
          : item
      )
    );
  };

  const handleremovebtn = (cartitemindex) => {
    setCartitems(() =>
      cartitems.map((item, index) =>
        (index == cartitemindex) & (item.cartQuantity > 0)
          ? { ...item, cartQuantity: item.cartQuantity - 1 }
          : item
      )
    );
  };

  const handledeletebtn = (cartitemindex) => {
    setCartitems(() =>
      cartitems.filter((item, index) => index !== cartitemindex)
    );
  };

  const totalPrice = cartitems.reduce(
    (acc, item) => acc + item.price * item.cartQuantity,
    0
  );

  return (
    <>
      <div>
        <div className="flex justify-between items-center text-xl font-semibold">
          <h1>Shopping Cart</h1>
          <button onClick={handlecartopen} className="cursor-pointer text-2xl">
            <IoIosRemoveCircleOutline />
          </button>
        </div>
        <div className="mt-5 flex flex-col gap-2">
          {cartitems.length > 0 ? (cartitems.map((item, index) => (
            <div
              key={index}
              className={`shopigncartitems w-full ${theme ? "bg-white":"bg-gray-500 "} shadow-lg h-20 rounded-md flex gap-3 items-center p-2`}
            >
              <div className="w-16 h-16 bg-white rounded-md">
                <img
                  className="w-full h-full rounded-md"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="">
                <p>{item.title}</p>
                <p>₹{item.price}</p>
              </div>
              <div className="flex gap-1 ml-4 items-center">
                <button
                  onClick={() => handleremovebtn(index)}
                  className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
                >
                  -
                </button>
                <p className="bg-gray-500 px-3 py-1">{item.cartQuantity}</p>
                <button
                  onClick={() => handleaddbtn(index)}
                  className="bg-blue-500 text-white px-3 py-1 cursor-pointer"
                >
                  +
                </button>
                <button
                  onClick={() => handledeletebtn(index)}
                  className="text-red-500 text-xl ml-2 cursor-pointer"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          ))) : "No Items In the cart"}
        </div>
        <div>
          <p className="bg-blue-500 w-full p-2 mt-2 rounded-md">
            Total Price : ₹ {totalPrice}
          </p>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
