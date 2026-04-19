import { useEffect, useState } from 'react';
import { MENU_URL } from './constants';

const useRestaurantMenu = (resId) => {
  const [resturantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json.data);
  };

  return resturantInfo;
};

export default useRestaurantMenu;
