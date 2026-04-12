import { useState } from 'react';
import ListItems from './ListItems';

const MenuCategory = (props) => {
  const [isOpen, setIsOpen] = useState(true);
  const { title, itemCards, vegFilter } = props;

  return (
    <div className="category-container">
      <button className="btn-menu-category" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? `${title} ▼` : `${title} ▲`}
      </button>
      {!isOpen && <ListItems items={itemCards} vegFilter={vegFilter} />}
    </div>
  );
};

export default MenuCategory;
