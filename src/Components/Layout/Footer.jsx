import React from "react";
import Clintlogo from "../../assets/images/client_logo_01.png";
import client_logo_02 from "../../assets/images/client_logo_02.png";
import client_logo_03 from "../../assets/images/client_logo_03.png";
import client_logo_04 from "../../assets/images/client_logo_04.png";


const Footer = () => {
  return (
    <>
      <section className="client-logo-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="single-client mt-30 text-center">
                <img src={Clintlogo} alt="Logo" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-client mt-30 text-center">
                <img src={client_logo_02} alt="Logo" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-client mt-30 text-center">
                <img src={client_logo_03} alt="Logo" />
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="single-client mt-30 text-center">
                <img src={client_logo_04} alt="Logo" />
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
      <section id="contact" className="contact-area">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center pb-10">
                <h4 className="title">Get In touch</h4>
                <p className="text">
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results. Happiness guaranteed!
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contact-form">
                <form
                  id="contact-form"
                  action="assets/contact.php"
                  method="post"
                  data-toggle="validator"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          data-error="Name is required."
                          required="required"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          data-error="Valid email is required."
                          required="required"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          data-error="Subject is required."
                          required="required"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-form form-group">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone"
                          data-error="Phone is required."
                          required="required"
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="single-form form-group">
                        <textarea
                          placeholder="Your Mesaage"
                          name="message"
                          data-error="Please, leave us a message."
                          required="required"
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <p className="form-message"></p>
                    <div className="col-md-12">
                      <div className="single-form form-group text-center">
                        <button type="submit" className="main-btn">
                          send message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer-area">
        <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
                  <div className="footer-logo d-flex align-items-end">
                    <a className="mt-30" href="index.html">
                      <img src="assets/images/logo.svg" alt="Logo" />
                    </a>
                    <ul className="social mt-30">
                      <li>
                        <a href="#">
                          <i className="lni-facebook-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-twitter-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-instagram-original"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="lni-linkedin-original"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-6">
                <div className="footer-link">
                  <h6 className="footer-title">Company</h6>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Career</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6">
                <div className="footer-link">
                  <h6 className="footer-title">Product & Services</h6>
                  <ul>
                    <li>
                      <a href="#">Products</a>
                    </li>
                    <li>
                      <a href="#">Business</a>
                    </li>
                    <li>
                      <a href="#">Developer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-5">
                <div className="footer-link">
                  <h6 className="footer-title">Help & Suuport</h6>
                  <ul>
                    <li>
                      <a href="#">Support Center</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-7">
                <div className="footer-newsletter">
                  <h6 className="footer-title">Subscribe Newsletter</h6>
                  <div className="newsletter">
                    <form action="#">
                      <input type="text" placeholder="Your Email" />
                      <button type="submit">
                        <i className="lni-angle-double-right"></i>
                      </button>
                    </form>
                  </div>
                  <p className="text">
                    Subscribe weekly newsletter to stay upto date. We don’t send
                    spam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright text-center">
                  <p className="text">
                    Template Crafted by{" "}
                    <a rel="nofollow" href="../../index.htm">
                      UIdeck
                    </a>{" "}
                    - UI Powered by{" "}
                    <a el="nofollow" href="../../index-1.htm">
                      AyroUI
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
