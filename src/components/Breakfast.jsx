import BreakfastMenu1 from '../assets/imgs/menu-b1.png';
import BreakfastMenu2 from '../assets/imgs/menu-b2.png';

const Breakfast = () => {
  return (
    <div className="menuType">
      <p>Breakfast - (7am - 3pm)</p>
      <div className='menuImgs'>
        <img src={BreakfastMenu1} alt='Menu'></img>
        <img src={BreakfastMenu2} alt='Menu'></img>
      </div>
    </div>
  )
}

export default Breakfast;
