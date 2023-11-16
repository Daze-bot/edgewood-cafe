import { useState } from "react";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";

const Menu = () => {
  const [showBreakfast, setShowBreakfast] = useState(true);
  const [showLunch, setShowLunch] = useState(false);

  const handleBreakfast = () => {
    setShowBreakfast(true);
    setShowLunch(false);
  }

  const handleLunch = () => {
    setShowBreakfast(false);
    setShowLunch(true);
  }

  return (
    <div className="menu">
      <h1>Menu</h1>
      <div className="menuButtons">
        <button onClick={handleBreakfast}>Breakfast</button>
        <button onClick={handleLunch}>Lunch</button>
      </div>
      { showBreakfast && 
        <Breakfast />
      }
      { showLunch && 
        <Lunch />
      }
    </div>
  )
}

export default Menu;
