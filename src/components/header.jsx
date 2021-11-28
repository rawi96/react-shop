import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg"
import { auth } from "../firebase/firebase.utils";
import { connect } from 'react-redux'
import CartIcon from "./cart-icon";
import CartDropdown from "./cart-dropdown";
import { selectCurrentUser } from "../redux/user/user.selectors";
import { selectCartHidden } from "../redux/cart/cart.selectors";

function Header({ currentUser, hidden }) {
  return (
    <div className="flex justify-between my-5 px-4 h-10">
      <Link to="/">
        <Logo></Logo>
      </Link>
      <div className="flex items-end text-xl">
        <Link className="" to="shop">Shop</Link>
        {currentUser ? <div className="ml-7 cursor-pointer" onClick={() => auth.signOut()}>Sign out</div> :
          <Link className="ml-7" to="sign-in">Sign in</Link>}
        <CartIcon />
      </div>
      {
        hidden ? null : (<CartDropdown />)
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);
