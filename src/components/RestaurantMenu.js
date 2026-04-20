import Shimmer from './Shimmer';
import MenuFilter from './MenuFilter';
import MenuCategory from './MenuCategory';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import useMenuFilter from '../utils/useMenuFilter';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resturantInfo = useRestaurantMenu(resId);
  const { vegOnly, setVegOnly, nonVegOnly, setNonVegOnly, filterType } =
    useMenuFilter();

  if (resturantInfo === null) return <Shimmer />;

  const { name, avgRating, cuisines, costForTwoMessage } =
    resturantInfo?.cards[2]?.card?.card?.info;
  const categories =
    resturantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(
      1,
      5,
    );

  return (
    <div className="p-4 m-4">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-2">{name}</h1>
      <h3 className="text-green-700 font-bold pb-1 mb-1">
        Rating: {avgRating} - {costForTwoMessage}
      </h3>
      <h3 className="text-gray-500">{cuisines.join(', ')}</h3>
      <h2>Menu</h2>
      <MenuFilter
        vegOnly={vegOnly}
        nonVegOnly={nonVegOnly}
        setVegOnly={setVegOnly}
        setNonVegOnly={setNonVegOnly}
      />
      <div>
        {categories.map((category) => {
          const { categoryId, title, itemCards } = category?.card?.card;

          return (
            <MenuCategory
              key={categoryId}
              title={title}
              itemCards={itemCards}
              vegFilter={filterType}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
