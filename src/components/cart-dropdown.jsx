import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import Button from "../components/button";
import { selectCartItems } from '../redux/cart/cart.selectors';
import CartItem from './cart-item';

function CartDropdown({ cartItems }) {
  return (
    <div className="absolute w-60 h-80 flex flex-col p-5 border border-black bg-white top-20 right-0 z-10">
        <div className="h-60 flex flex-col overflow-y-scroll">
          {cartItems.map(item => <CartItem key={item.id} item={item} />)}
        </div>
        <Button type="button" value="checkout"/>
    </div>
  );
}

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
