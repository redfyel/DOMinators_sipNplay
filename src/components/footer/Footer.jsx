import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div className="footer d-flex justify-content-between mt-5">
     <div className="details">
     <h3>Contact Us!</h3>
      <p className="lead">
        <a href="mailto:sipnplaynyc@gmail.com">sipnplaynyc@gmail.com</a>
        <br />
        718-971-1684
      </p>
     </div>

      <div className="map-part">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.265214478525!2d-73.9894923241595!3d40.66812497140033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25afce910cb65%3A0x51750a9972fb4c0a!2s471%205th%20Ave%2C%20Brooklyn%2C%20NY%2011215%2C%20USA!5e0!3m2!1sen!2sin!4v1720759117591!5m2!1sen!2sin"
          width="700"
          height="250"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
