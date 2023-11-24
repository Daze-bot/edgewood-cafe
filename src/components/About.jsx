import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about">
      <h1>About</h1>
      <p>Placeholder for any info wanted</p>
    </div>
  )
}

export default About;
