import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import Button from "../components/button";

function CartDropdown({ currentUser }) {
  return (
    <div className="absolute w-60 h-80 flex flex-col p-5 border border-black bg-white top-20 right-0 z-10">
        <div className="h-60 flex flex-col overflow-y-scroll">
        </div>
        <Button type="button" value="checkout"/>
    </div>
  );
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(CartDropdown);
