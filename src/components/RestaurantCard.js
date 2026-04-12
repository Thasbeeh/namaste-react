import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla: { deliveryTime },
  } = props?.resData?.info;

  return (
    <div className="rest-cards" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo} for 2!</h3>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
