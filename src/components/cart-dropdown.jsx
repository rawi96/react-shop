import { connect } from 'react-redux';
import { useNavigate } from 'react-router';
import Button from "../components/button";
import { selectCartItems } from '../redux/cart/cart.selectors';
import CartItem from './cart-item';

function CartDropdown({ cartItems }) {
  const navigate = useNavigate();

  return (
    <div className="absolute w-60 h-80 flex flex-col p-5 border border-black bg-white top-20 right-0 z-10">
      <div className="h-60 flex flex-col overflow-y-scroll">
        {
          cartItems.length ?
            cartItems.map(item => <CartItem key={item.id} item={item} />)
            :
            <span className="m-auto text-lg">Your Cart is empty</span>
        }
      </div>
      <Button onClick={() => navigate('/checkout')} type="button" value="checkout" />
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
