import MenuPDF from '../assets/imgs/mock-menu.webp';

const Lunch = () => {
  return (
    <div className="menuType">
      <p>Lunch - (7am - 3pm)</p>
      <div className='menuImgs'>
        <img src={MenuPDF} alt='Menu'></img>
        <img src={MenuPDF} alt='Menu'></img>
      </div>
    </div>
  )
}

export default Lunch;
