import { useContext } from 'react';
import { CDN_URL } from '../utils/constants';
import UserContext from '../utils/UserContext';

const RestaurantCard = (props) => {
  const {
    name,
    cuisines,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    sla: { deliveryTime },
  } = props?.resData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-100 h-150 rounded-3xl bg-gray-200 hover:bg-red-100">
      <img
        className="rounded-2xl w-full h-100"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="font-bold py-2 text-lg">{name}</h4>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo} for 2!</h3>
      <h3>{deliveryTime} minutes</h3>
      <h3>{loggedInUser}</h3>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-3 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
