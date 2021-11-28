import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../assets/shopping-bag.svg'
import { toggleCartHidden } from '../redux/cart/cart.actions';
import { selectCartItemsCount } from '../redux/cart/cart.selectors';
import cartItem from './cart-item';

function CartIcon({ toggleCartHidden, itemCount }) {
    return (
        <div onClick={toggleCartHidden} className="ml-7 pt-4 w-12 h-12 relative flex items-center justify-center cursor-pointer">
            <ShoppingIcon className="w-6 h-6" />
            <span className="absolute text-xs font-bold bottom-1">{itemCount}</span>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
