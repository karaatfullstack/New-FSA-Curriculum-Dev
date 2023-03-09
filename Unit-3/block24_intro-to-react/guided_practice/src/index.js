import React from 'react';
import ReactDOM from 'react-dom/client';

const Profile = () => {
  return (
    <section>
      <h2>Grace Hopper</h2>
      <img src='https://news.yale.edu/sites/default/files/styles/horizontal_image/public/d6_files/YaleNews_hopper-grace.UNIVAC.102635875-CC_0.jpg?itok=4HL3ETlO' />
      <address>
        <a href='mailto:gracehopper@gmail.com'>📧gracehopper@gmail.com</a>
        <br />
        <a href='tel:+11234567890'>📞(123) 456-7890</a>
      </address>
    </section>
  );
};

const domNode = document.querySelector('#root');
const root = ReactDOM.createRoot(domNode);
root.render(<Profile />);

/**** Solution using object destructuring and method chaining****/
/*
import React from 'react';
import { createRoot } from 'react-dom/client';

const Profile = () => {
  return (
    <section>
      <h2>Grace Hopper</h2>
      <img src='https://news.yale.edu/sites/default/files/styles/horizontal_image/public/d6_files/YaleNews_hopper-grace.UNIVAC.102635875-CC_0.jpg?itok=4HL3ETlO' />
      <address>
        <a href='mailto:gracehopper@gmail.com'>📧gracehopper@gmail.com</a>
        <br />
        <a href='tel:+11234567890'>📞(123) 456-7890</a>
      </address>
    </section>
  );
};

createRoot(document.querySelector('#root')).render(<Profile />);
*/
