import Drawing from '../assets/imgs/drawing.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>Edgewood Cafe</h1>
      <img src={Drawing} alt='Logo'></img>
      <p>1730 Yardley Langhorne Rd, Yardley, PA</p>
      <hr></hr>
      <p>(215) 321-0500</p>
      <hr></hr>
      <span>Open every day for Breakfast and Lunch from 7am - 3pm</span>
    </div>
  )
};

export default Home;
