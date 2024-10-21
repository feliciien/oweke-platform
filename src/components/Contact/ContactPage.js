import React, { useEffect } from 'react';

import $ from 'jquery';

import Header from '../header';
import Footer from '../footer';

const ContactPage = () => {

  useEffect(() => {
    // Fonction pour définir les images de fond
    function setBackgroundImages() {
      $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        if (bg) {
          $(this).css('background-image', 'url(' + bg + ')');
        }
      });
    }

    // Appeler cette fonction après le rendu de la page
    setBackgroundImages();
  }, []);
    
    return (
        <div>
            <Header />

            <section className="breadcrumb-section set-bg" data-setbg="img/contact.jpg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 text-center">
                    <div className="breadcrumb-text">
                      <h2>Contactez-Nous</h2>
                    </div>
                  </div>
                </div>
              </div>
            </section>


    <section className="contact-section spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="section-title contact-title">
          <span>Contact Us</span>
          <h2>ETRE EN CONTACT</h2>
        </div>
        <div className="contact-widget">
          <div className="cw-text">
            <i className="fa fa-map-marker" />
            <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
          </div>
          <div className="cw-text">
            <i className="fa fa-mobile" />
            <ul>
              <li>33 644 20 74 11</li>
             
            </ul>
          </div>
          <div className="cw-text email">
            <i className="fa fa-envelope" />
            <p>owekesupport@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="leave-comment">
          <form action="#">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Website" />
            <textarea placeholder="Comment" defaultValue={""} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd" height={550} style={{border: 0}} allowFullScreen />
    </div>
  </div>
</section>

{/* Get In Touch Section Begin */}
<div className="gettouch-section">
  <div className="container">
    <div className="row">
      <div className="col-md-4">
        <div className="gt-text">
          <i className="fa fa-map-marker" />
          <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="gt-text">
          <i className="fa fa-mobile" />
          <ul>
          <li>33 644 20 74 11</li>
          </ul>
        </div>
      </div>
      <div className="col-md-4">
        <div className="gt-text email">
          <i className="fa fa-envelope" />
          <p>owekesupport@gmail.com</p>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Get In Touch Section End */}

<Footer />




        </div>
    )
}

export default ContactPage;