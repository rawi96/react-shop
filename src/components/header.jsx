import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg"
import { auth } from "../firebase/firebase.utils";
import { connect } from 'react-redux'

function Header({ currentUser }) {
  return (
    <div className="flex justify-between my-5 px-4 h-10">
      <Link to="/">
        <Logo></Logo>
      </Link>
      <div className="flex items-end text-xl">
        <Link className="" to="shop">Shop</Link>
        <Link className="ml-7" to="contact">Contact</Link>

        {currentUser ? <div className="ml-7 cursor-pointer" onClick={() => auth.signOut()}>Sign out</div> :
          <Link className="ml-7" to="sign-in">Sign in</Link>}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
