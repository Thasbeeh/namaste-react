import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';
import { MENU_URL } from '../utils/constants';
import MenuFilter from './MenuFilter';
import MenuCategory from './MenuCategory';
import { useParams } from 'react-router-dom';

const RestaurantMenu = () => {
  const { resId } = useParams();

  const [resturantInfo, setRestaurantInfo] = useState(null);
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json?.data);
  };

  if (resturantInfo === null) return <Shimmer />;

  const { name, avgRating, cuisines, costForTwoMessage } =
    resturantInfo?.cards[2]?.card?.card?.info;

  const categories =
    resturantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const vegFilter = vegFilterFactory(vegOnly, nonVegOnly);

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h3>
        Rating: {avgRating} - {costForTwoMessage}
      </h3>
      <h3>{cuisines.join(', ')}</h3>
      <h2>Menu</h2>
      <MenuFilter
        vegOnly={vegOnly}
        nonVegOnly={nonVegOnly}
        setVegOnly={setVegOnly}
        setNonVegOnly={setNonVegOnly}
      />
      <div className="menu-container">
        {categories.map((category) => {
          const { categoryId, title, itemCards } = category?.card?.card;

          return (
            <MenuCategory
              key={categoryId}
              title={title}
              itemCards={itemCards}
              vegFilter={vegFilter}
            />
          );
        })}
      </div>
    </div>
  );
};

const vegFilterFactory = (vegOnly, nonVegOnly) => {
  if (vegOnly == true && nonVegOnly == false) return 'VEG';
  else if (vegOnly == false && nonVegOnly == true) return 'NONVEG';
  else return null;
};

export default RestaurantMenu;
