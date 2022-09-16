import React from 'react';
import { Link } from 'react-router-dom';
import ContactAddress from '../components/Contact/ContactAddress';
import ContactForm from '../components/Contact/ContactForm';
import Map from '../components/Contact/Map';
import PageHeading from '../components/PageHeading';

function Contact() {
  return (
    <section>
      <PageHeading>
        <div className="h1">contact</div>
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link to="/home" className="hover:text-yellow-600">
                Home
              </Link>
            </li>
            <li className="hover:text-yellow-600">contact</li>
          </ul>
        </div>
      </PageHeading>
      <div className="flex flex-col md:flex-row my-24">
        <ContactAddress />
        <ContactForm />
      </div>
      <div>
        <Map />
      </div>
    </section>
  );
}

export default Contact;
