import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const ShoppingCart = ({ shoesdata, setShoesdata, cartitems, setCartitems, handlecartopen, theme }) => {

  const handleaddbtn = (cartitemid) => {
    setCartitems(cartitems.map((item) =>
      item.id === cartitemid
        ? { ...item, cartQuantity: item.cartQuantity + 1 }
        : item
    ));
    setShoesdata(shoesdata.map((item) =>
      item.id === cartitemid
        ? { ...item, cartQuantity: item.cartQuantity + 1 }
        : item
    ));
  };

  const handleremovebtn = (cartitemid) => {
    setCartitems(cartitems.map((item) =>
      item.id === cartitemid && item.cartQuantity > 0
        ? { ...item, cartQuantity: item.cartQuantity - 1 }
        : item
    ));
    setShoesdata(shoesdata.map((item) =>
      item.id === cartitemid
        ? { ...item, cartQuantity: item.cartQuantity - 1 }
        : item
    ));
  };

  const handledeletebtn = (cartitemid) => {
    setCartitems(cartitems.filter((item) => item.id !== cartitemid));
    setShoesdata(shoesdata.map((item) =>
      item.id === cartitemid
        ? { ...item, cartQuantity: 0 }
        : item
    ));
  };

  const totalPrice = cartitems.reduce(
    (acc, item) => acc + item.price * item.cartQuantity,
    0
  );

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center text-xl font-semibold">
        <h1>Shopping Cart</h1>
        <button onClick={handlecartopen} className="text-2xl">
          <IoIosRemoveCircleOutline />
        </button>
      </div>

      <div className="flex flex-col gap-2 overflow-y-auto max-h-48 sm:max-h-64 md:max-h-full">
        {cartitems.length > 0 ? cartitems.map((item, index) => (
          item.cartQuantity > 0 && (
            <div
              key={index}
              className={`flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3 p-2 rounded-md shadow ${
                theme ? "bg-white" : "bg-gray-700 text-white"
              }`}
            >
              <div className="w-full sm:w-16 h-16 flex-shrink-0 rounded-md overflow-hidden">
                <img className="w-full h-full object-cover" src={item.image} alt={item.title} />
              </div>

              <div className="flex-1 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center w-full">
                <div className="flex flex-col">
                  <p className="font-medium">{item.title}</p>
                  <p>₹{item.price}</p>
                </div>

                <div className="flex gap-1 mt-2 sm:mt-0 items-center">
                  <button
                    onClick={() => handleremovebtn(item.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >-</button>

                  <p className="bg-gray-300 text-gray-900 px-3 py-1 rounded">{item.cartQuantity}</p>

                  <button
                    onClick={() => handleaddbtn(item.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >+</button>

                  <button
                    onClick={() => handledeletebtn(item.id)}
                    className="text-red-500 text-xl ml-2"
                  >
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          )
        )) : (
          <p className="text-center text-gray-500">No Items In the cart</p>
        )}
      </div>

      <div className="mt-2">
        <p className="bg-blue-500 text-white p-2 rounded-md text-center font-semibold">
          Total Price : ₹{totalPrice}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
