import { useCart } from '../../context/cartContext/cart-context';

const CartPhotoPage = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <div>
      <div>CartPage</div>
    </div>
  );
};
export default CartPhotoPage;
