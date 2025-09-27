import { useState } from "react";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";


const App = () => {
  const [theme, setTheme] = useState(true);

  const [cartitems, setCartitems] = useState([]);



  const [iscartopen, setIsCartOpen] = useState(true);

  const handlecartopen = () => {
    setIsCartOpen(!iscartopen);
  };

  return (
    <div
      className={`w-full h-full ${
        theme ? "bg-zinc-100" : "bg-zinc-900 text-white"
      } min-h-screen`}
    >
      <Navbar
        iscartopen={iscartopen}
        handlecartopen={handlecartopen}
        theme={theme}
        setTheme={setTheme}
        
      />
      <MainPage
      cartitems={cartitems}
      setCartitems={setCartitems}
        iscartopen={iscartopen}
        handlecartopen={handlecartopen}
        theme={theme}
      />
    </div>
  );
};

export default App;
