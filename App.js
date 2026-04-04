import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './restaurants-data.js';

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Restaurant container
 *    - Resto cards
 *     - Nmae, start, cuisine, delivery time, etc
 * Footer
 * - Copyright
 * - Contact
 * - Address
 * - Links
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://media-cdn.tripadvisor.com/media/photo-s/1d/9d/69/c2/milkyfood.jpg"
        ></img>
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const {
    resData: {
      info: {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        costForTwo,
        sla: { deliveryTime },
      },
    },
  } = props;

  const cloudinaryCdn =
    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

  return (
    <div className="rest-cards" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={cloudinaryCdn + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo} for 2!</h3>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {restaurants.map((rest) => (
          <RestaurantCard key={rest.info.id} resData={rest} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
