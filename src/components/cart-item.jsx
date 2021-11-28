import { connect } from "react-redux";
import { addItem } from "../redux/cart/cart.actions";
import Button from "./button";

function CartItem({ item }) {
    return (
        <div className='w-full flex h-20 mb-4'>
            <img className="w-1/3 mr-2" src={item.imageUrl} alt={item.name} />
            <div className="w-8/12 flex flex-col items-start pt-3 pb-5">
                <span>{item.name}</span>
                <span>{item.quantity} x {item.price$}</span>
            </div>
            
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);
