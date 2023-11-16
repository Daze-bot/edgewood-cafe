import MenuPDF from '../assets/imgs/mock-menu.webp';

const Breakfast = () => {
  return (
    <div className="menuType">
      <p>Breakfast - (7am - 3pm)</p>
      <div className='menuImgs'>
        <img src={MenuPDF} alt='Menu'></img>
        <img src={MenuPDF} alt='Menu'></img>
      </div>
    </div>
  )
}

export default Breakfast;
