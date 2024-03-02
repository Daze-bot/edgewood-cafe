import { useEffect, useState } from 'react';
import Drawing from '../assets/imgs/drawing.jpg';

const Home = () => {
  const [currentAlert, setCurrentAlert] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('https://daze-api.adaptable.app/edgewood/alerts/recent')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.data.text === "") {
          setCurrentAlert("Open every day for Breakfast and Lunch from 7am - 3pm")
        } else {
          setCurrentAlert(data.data.text);
        }
      })
  }, []);

  return (
    <div className="home">
      <h1>Edgewood Cafe</h1>
      <img src={Drawing} alt='Logo'></img>
      <p>1730 Yardley Langhorne Rd, Yardley, PA</p>
      <hr></hr>
      <p>(215) 321-0500</p>
      <hr></hr>
      <h3>{currentAlert}</h3>
    </div>
  )
};

export default Home;
