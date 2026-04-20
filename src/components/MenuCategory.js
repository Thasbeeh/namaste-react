import { useState } from 'react';
import ListItems from './ListItems';

const MenuCategory = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { title, itemCards, vegFilter } = props;

  return (
    <div>
      <button
        className="items-center p-4 rounded-2xl w-[75%] shadow-sm border border-gray-200 my-4 hover:bg-gray-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? `${title} ▼` : `${title} ▲`}
      </button>
      {!isOpen && <ListItems items={itemCards} vegFilter={vegFilter} />}
    </div>
  );
};

export default MenuCategory;
