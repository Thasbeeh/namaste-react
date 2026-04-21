const MenuFilter = (props) => {
  const { vegOnly, nonVegOnly, setVegOnly, setNonVegOnly } = props;

  return (
    <div className="flex w-fit mx-auto gap-10 p-4">
      {/* Veg Filter */}
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-sm font-medium text-gray-700">Veg</span>
        <input
          type="checkbox"
          className="h-4 w-4 accent-green-600 cursor-pointer"
          checked={vegOnly}
          onChange={() => {
            if (nonVegOnly) setNonVegOnly(false);
            setVegOnly(!vegOnly);
          }}
        />
      </label>

      {/* Non-Veg Filter */}
      <label className="flex items-center gap-2 cursor-pointer">
        <span className="text-sm font-medium text-gray-700">Non-veg</span>
        <input
          type="checkbox"
          className="h-4 w-4 accent-red-600 cursor-pointer"
          checked={nonVegOnly}
          onChange={() => {
            if (vegOnly) setVegOnly(false);
            setNonVegOnly(!nonVegOnly);
          }}
        />
      </label>
    </div>
  );
};

export default MenuFilter;
