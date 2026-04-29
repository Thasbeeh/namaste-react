import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../utils/cartSlice';

const ListItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (name) => {
    dispatch(addItem(name));
  };

  return (
    <div>
      {items.map((item, index) => {
        const { id, name, price, defaultPrice, description, imageId } = item?.card?.info;
        const priceOfItem = price || defaultPrice;

        return (
          <div
            key={id + '-' + index}
            data-testid="listItem"
            className="flex border-b-2 border-gray-400 mb-4 p-2 justify-between"
          >
            <div className="p-2 m-2 text-left w-9/12">
              <h3 className="font-bold">{name}</h3>
              <h3>₹ {priceOfItem / 100}</h3>
              <p className="text-xs">{description}</p>
            </div>
            <div className="relative w-3/12 flex flex-col items-center justify-center mb-6">
              <img
                className="w-[70%] aspect-square object-cover rounded-lg"
                src={CDN_URL + imageId}
                alt="restaurant item"
              />
              <div className="absolute -bottom-3">
                <button
                  className="px-7 py-1 bg-white text-green-600 shadow-lg rounded-md hover:bg-green-100 cursor-pointer"
                  onClick={() => handleAddItem(item)}
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
