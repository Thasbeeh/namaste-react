import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { DATA_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(DATA_URL);
    const json = await data.json();
    let allResturantsList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(allResturantsList);
    setFilteredRestaurants(allResturantsList);
  };

  return listOfRestaurants.length === 0 ? (
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
          <button
            className="search-btn"
            onClick={() => {
              const filteredRes = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.5,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
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
