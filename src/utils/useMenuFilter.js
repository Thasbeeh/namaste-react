import { useState } from 'react';

const useMenuFilter = () => {
  const [vegOnly, setVegOnly] = useState(false);
  const [nonVegOnly, setNonVegOnly] = useState(false);

  const getFilterType = (vegOnly, nonVegOnly) => {
    if (vegOnly == true && nonVegOnly == false) return 'VEG';
    else if (vegOnly == false && nonVegOnly == true) return 'NONVEG';
    else return null;
  };

  return {
    vegOnly,
    setVegOnly,
    nonVegOnly,
    setNonVegOnly,
    filterType: getFilterType(vegOnly, nonVegOnly),
  };
};

export default useMenuFilter;
