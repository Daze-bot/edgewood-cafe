import Facebook from '../assets/imgs/facebook.svg';
import Call from '../assets/imgs/call.svg';
import Mail from '../assets/imgs/mail.svg';
import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="allContacts">
        <div className='contactCall'>
          <div>
            <img src={Call} alt='Call'></img>
            <h3>Call Us</h3>
          </div>
          <p>
            Give us a call to make a Take-Out order! We are currently first-come first-serve and not taking reservations.
          </p>
          <div className='textContact'>
            <span>(215) 321-0500</span>
          </div>
        </div>
        <div className='contactFacebook'>
          <div>
            <img src={Facebook} alt='Facebook'></img>
            <h3>Follow Us</h3>
          </div>
          <p>
            Stay up to date with all of the latest news and info!  Click the link below to be directed right to our facebook page.
          </p>
          <a href='https://www.facebook.com/edgewoodcafe1730/' target='blank'>
            <button>Facebook</button>
          </a>
        </div>
        <div className='contactEmail'>
          <div>
            <img src={Mail} alt='email'></img>
            <h3>Email Us</h3>
          </div>
          <p>
            For any business inquiries or additional information, please feel free to send us an email.  We'd love to hear from you!
          </p>
          <div className='textContact'>
            <span>edgewoodcafe@aol.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
