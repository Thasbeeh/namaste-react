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
      <div className="filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="search-btn" onClick={search}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={topRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="rest-container">
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
