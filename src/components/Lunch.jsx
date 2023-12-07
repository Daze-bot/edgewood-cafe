import LunchMenu1 from '../assets/imgs/menu-l1.png';
import LunchMenu2 from '../assets/imgs/menu-l2.png';

const Lunch = () => {
  return (
    <div className="menuType">
      <p>Lunch - (7am - 3pm)</p>
      <div className='menuImgs'>
        <img src={LunchMenu1} alt='Menu'></img>
        <img src={LunchMenu2} alt='Menu'></img>
      </div>
    </div>
  )
}

export default Lunch;
