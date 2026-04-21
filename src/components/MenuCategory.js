import ListItems from './ListItems';

const MenuCategory = (props) => {
  const { title, itemCards, vegFilter, showItems, setShowIndex } = props;

  const displayedItems = !vegFilter
    ? itemCards
    : itemCards?.filter(
        (item) => item?.card?.info?.itemAttribute?.vegClassifier === vegFilter,
      );

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => setShowIndex()}
      >
        <span className="font-bold text-lg">
          {title} ({displayedItems.length})
        </span>
        <span>{showItems ? '🔼' : '🔽'}</span>
      </div>
      {showItems && <ListItems items={displayedItems} />}
    </div>
  );
};

export default MenuCategory;
