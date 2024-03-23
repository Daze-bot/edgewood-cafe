import { useEffect } from 'react';
import Drawing from '../assets/imgs/drawing.jpg';

const Home = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
      <h1>Edgewood Cafe</h1>
      <h3>{props.currentAlert}</h3>
      <img src={Drawing} alt='Logo'></img>
      <p>1730 Yardley Langhorne Rd, Yardley, PA</p>
      <hr></hr>
      <p>(215) 321-0500</p>
      <hr></hr>
      <p>Open every day for Breakfast and Lunch from 7am - 3pm</p>
    </div>
  )
};

export default Home;
