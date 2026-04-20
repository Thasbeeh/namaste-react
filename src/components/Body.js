import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useRestaurants from '../utils/useRestaurants';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const {
    listOfRestaurants,
    searchText,
    setSearchText,
    filteredRestaurants,
    search,
    topRatedRestaurants,
  } = useRestaurants();
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like you are Offline!! Please check your internet connection
      </h1>
    );

  return listOfRestaurants == undefined || listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex m-2 px-4">
        <div className="search m-2 p-2">
          <input
            className="border border-solid border-black w-125 py-1"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="m-3 px-6 py-2 bg-green-100 hover:bg-green-200 rounded-lg cursor-pointer"
            onClick={search}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-2">
          <button
            className="m-3 px-6 py-2 bg-green-100 hover:bg-green-200 rounded-lg cursor-pointer"
            onClick={topRatedRestaurants}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap m-2 p-2 justify-between">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
