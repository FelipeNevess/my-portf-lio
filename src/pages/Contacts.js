import React from 'react';

import '../styles/Contacts.css';

import { BsLinkedin } from 'react-icons/bs';
import { FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contacts() {
  const clipboardCopy = async () => {
    const email = 'fneves.dev@gmail.com';

    await navigator.clipboard.writeText(email);

    alert('Email copiado');
  }

  return(
    <section className="section-contacts" id="contact">
      <div className="container-contacts">
        <div>
          <h1>HOW CAN I HELP?</h1>
        </div>
        <div className="block-contact-info-datails">
          <div className="block-info-address">
            <div className="info-localization">
              <h4>LOCALIZATION</h4>
              <div>
                <p>Street Campolândia,</p>
                <p>Angelim,</p>
                <p>Teresina - PI</p>
              </div>
            </div>
            <div className="icons-social">
              <h4>FOLLOW US</h4>
              <div>
                <a
                  href="https://www.linkedin.com/in/felipe-neves-/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin className="icon-likedin" />
                </a>
                <a
                  href="https://www.instagram.com/dev_on_code/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagramSquare className="icon-insta" />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5586994580624&text=Ol%C3%A1%20Dev!!%20vamos%20conversar%3F"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsappSquare className="icon-whats" />
                </a>
                <MdEmail
                  className="icon-email"
                  onClick={ () => clipboardCopy() }
                />
              </div>
            </div>
            <p>&copy; 2021 Felipe Neves</p>
          </div>

          <div className="block-add-form">
            <h4>CONTACT FORM</h4>
            <form action="https://api.staticforms.xyz/submit" method="post">
              <input type="hidden" name="accessKey" value="d11c852d-a710-4481-a609-a98d861f9535" />
              <select name="kind-of-conversation" id="kind-of-conversation">
                <option value="recruiter">Recruiter person</option>
                <option value="freela">Freela service</option>
              </select>
              <div className="cont-inputs">
                <input type="text" id="name" name="name" placeholder="name" required />
                <input type="email" id="email" name="email" placeholder="email" required />
              </div>
              <textarea
                placeholder="what i'm thinking"
                rows="5"
                cols="33"
                maxLength="300"
                name="message"
              />
              <input type="hidden" name="redirectTo" value="https://felipeneves.netlify.app/"></input>
              <button type="submit">To send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
