const ListItems = (props) => {
  const { items, vegFilter } = props;

  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          const {
            id,
            name,
            price,
            itemAttribute: { vegClassifier },
          } = item?.card?.info;

          const isMatch = !vegFilter || vegFilter == vegClassifier;

          return isMatch ? (
            <li key={id} className="item">
              {name} - Rs.{price / 100}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default ListItems;
