import { MdOutlineDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = ({
  theme,
  setTheme,
 
  handlecartopen,
  
}) => {
  

  return (
    <div
      className={`w-full h-20 ${
        theme ? "bg-white" : "bg-black text-white"
      } shadow-lg flex justify-between items-center px-8`}
    >
      <div>
        <h1 className="text-2xl font-semibold">ShoeStore</h1>
      </div>
      <div className="flex gap-6 text-xl items-center">
        <div
          className={`flex gap-4 ${
            theme ? "bg-zinc-300" : "bg-zinc-700"
          } px-3 py-1 rounded-full items-center`}
        >
          <button onClick={handlecartopen} className="cursor-pointer">
            <FaShoppingCart />
          </button>
         
        </div>
        <div>
          <button onClick={() => setTheme(!theme)} className="cursor-pointer">
            {" "}
            {!theme ? <MdLightMode /> : <MdOutlineDarkMode />}{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
