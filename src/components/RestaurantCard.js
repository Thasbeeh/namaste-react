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
    <div className="m-4 p-4 w-100 h-150 rounded-3xl bg-gray-200 hover:bg-red-100">
      <img
        className="rounded-2xl"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h3>{cuisines.join(', ')}</h3>
      <h3>{avgRating} stars</h3>
      <h3>{costForTwo} for 2!</h3>
      <h3>{deliveryTime} minutes</h3>
    </div>
  );
};

export default RestaurantCard;
