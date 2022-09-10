import React from "react";
import ContactAddress from "../../components/Contact/ContactAddress";
import ContactForm from "../../components/Contact/ContactForm";
import Map from "../../components/Contact/Map";

const Contact = () => {
  return (
<section>
<div className="flex flex-col md:flex-row my-24">
        <ContactAddress />
        <ContactForm />
      </div>
      <div>
        <Map/>
      </div>
</section>
  );
};

export default Contact;
