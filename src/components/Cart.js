import { useDispatch, useSelector } from 'react-redux';
import ListItems from './ListItems';
import { clearItems } from '../utils/cartSlice';

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => dispatch(clearItems());

  return (
    <div className="text-center w-6/12 mx-auto p-5">
      <h1 className="font-bold text-2xl">Cart</h1>
      <button
        className="m-3 px-6 py-2 bg-green-100 hover:bg-green-200 rounded-lg cursor-pointer"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems.length === 0 && <h3>Cart is empty. Add items to the cart!</h3>}
      <ListItems items={cartItems}></ListItems>
    </div>
  );
};

export default Cart;
