import React from "react";

const Map = () => {
  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1821.534234602356!2d90.97900075216043!3d24.063893278814604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37541ea1261a1293%3A0xf87af7fac308ea98!2sHazi%20Asmat%20Government%20College%2C%20Bhairab!5e0!3m2!1sen!2sbd!4v1662789623799!5m2!1sen!2sbd"
        // width="600"
        // height="450"
        style={{border:0}}
        allowFullScreen="allowfullscreen"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-screen"
        title="Haji Asmat College Google Map"
      ></iframe>
    </section>
  );
};

export default Map;
