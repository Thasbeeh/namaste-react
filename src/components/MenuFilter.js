const MenuFilter = (props) => {
  const { vegOnly, nonVegOnly, setVegOnly, setNonVegOnly } = props;

  return (
    <div className="menu-filters">
      <label>
        Veg
        <input
          type="checkbox"
          className="veg-checkbox"
          checked={vegOnly}
          onChange={() => {
            if (nonVegOnly) setNonVegOnly(false);
            vegOnly == true ? setVegOnly(false) : setVegOnly(true);
          }}
        ></input>
      </label>
      <label>
        Non-veg
        <input
          type="checkbox"
          className="non-veg-checkbox"
          checked={nonVegOnly}
          onChange={() => {
            if (vegOnly) setVegOnly(false);
            nonVegOnly == true ? setNonVegOnly(false) : setNonVegOnly(true);
          }}
        ></input>
      </label>
    </div>
  );
};

export default MenuFilter;
