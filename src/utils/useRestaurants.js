import { useEffect, useState } from 'react';
import { DATA_URL } from './constants';

const useRestaurants = () => {
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
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(allResturantsList);
    setFilteredRestaurants(allResturantsList);
  };

  const search = () => {
    const filteredRes = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilteredRestaurants(filteredRes);
  };

  const topRatedRestaurants = () => {
    const filteredList = filteredRestaurants.filter(
      (res) => res.info.avgRating > 4.5,
    );
    setFilteredRestaurants(filteredList);
  };

  return {
    listOfRestaurants,
    searchText,
    setSearchText,
    filteredRestaurants,
    search,
    topRatedRestaurants,
  };
};

export default useRestaurants;
