import { connect } from "react-redux";
import CheckoutItem from "../components/checkout-item";
import StripeButton from "../components/stripe-button";
import { selectCartItems, selectCartItemsCount, selectCartTotal } from "../redux/cart/cart.selectors";
import { setCurrentUser } from "../redux/user/user.actions";

function Checkout({ cartItems, total }) {
  return (
    <div className="w-11/12 mx-auto mt-20" >
      <div className="flex border-black border-b pb-5">
        <div className="w-1/5 text-center">
          <span>Product</span>
        </div>
        <div className="w-1/5 text-center">
          <span>Description</span>
        </div>
        <div className="w-1/5 text-center">
          <span>Quantity</span>
        </div>
        <div className="w-1/5 text-center">
          <span>Price</span>
        </div>
        <div className="w-1/5 text-center">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} item={cartItem} />))}
      <div className="text-2xl font-bold text-right">TOTAL ${total}</div>
      <div className="text-right mt-5"><StripeButton price={total} /></div>
    </div>
  );
}
const mapStateToProps = state => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
