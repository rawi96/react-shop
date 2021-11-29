import { connect } from "react-redux";
import { addItem, clearItemFromCart, removeItem } from "../redux/cart/cart.actions";
import Button from "./button";

function CheckoutItem({ item, clearItemFromCart, addItem, removeItem }) {
    return (
        <div className='flex justify-center'>
            <div className="w-1/5 border-black border-b p-5 mb-5">
                <img className="" src={item.imageUrl} alt={item.name} />
            </div>
            <div className="w-1/5 text-center border-black border-b p-5 mb-5">
                <span>{item.name}</span>
            </div>
            <div className="w-1/5 text-center border-black border-b p-5 mb-5">
                <span onClick={() => removeItem(item)} className="text-3xl pr-2 cursor-pointer">&lt;</span>
                <span>{item.quantity}</span>
                <span onClick={() => addItem(item)} className="text-3xl pl-2 cursor-pointer">&gt;</span>
            </div>
            <div className="w-1/5 text-center border-black border-b p-5 mb-5 ">
                <span>{item.price}</span>
            </div>
            <div className="w-1/5 text-center border-black border-b p-5 mb-5">
                <span onClick={() => clearItemFromCart(item)} className="cursor-pointer">&#10005;</span>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    clearItemFromCart: item => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
