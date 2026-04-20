const ListItems = (props) => {
  const { items, vegFilter } = props;

  return (
    <div className="m-4">
      <ul>
        {items.map((item) => {
          const {
            id,
            name,
            price,
            defaultPrice,
            itemAttribute: { vegClassifier },
          } = item?.card?.info;

          const isMatch = !vegFilter || vegFilter == vegClassifier;
          const priceOfItem = price || defaultPrice;
          return isMatch ? (
            <li key={id} className="item">
              {name} - Rs.{priceOfItem / 100}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default ListItems;
