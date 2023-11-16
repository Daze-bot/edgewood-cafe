import Facebook from '../assets/imgs/facebook.svg';
import Call from '../assets/imgs/call.svg';
import Mail from '../assets/imgs/mail.svg';

const Contact = () => {
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
            Placeholder info regarding contacting the cafe.  Takeout, reservation info, 
            etc..
          </p>
          <div className='textContact'>
            <span>(215) 321-0500</span>
          </div>
        </div>
        <div className='contactEmail'>
          <div>
            <img src={Mail} alt='email'></img>
            <h3>Email Us</h3>
          </div>
          <p>
            Placeholder info regarding email contact.  Business inquiries, etc...
          </p>
          <div className='textContact'>
            <span>edgewoodcafe@aol.com</span>
          </div>
        </div>
        <div className='contactFacebook'>
          <div>
            <img src={Facebook} alt='Facebook'></img>
            <h3>Follow Us</h3>
          </div>
          <p>
            Stay up to date with all of the latest news and info.  Whatever other 
            info would like to add, etc..
          </p>
          <a href='https://www.facebook.com/edgewoodcafe1730/' target='blank'>
            <button>Facebook</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;
