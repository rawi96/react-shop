import { connect } from "react-redux";
import { addItem } from "../redux/cart/cart.actions";
import Button from "./button";

function CollectionItem({ item, addItem }) {
    const { id, name, price, imageUrl } = item;
    return (
        <div className='sm:w-1/2 md:w-1/4 w-full h-96 px-3 mb-40'>
            <div
                className='w-full, h-full bg-center bg-cover'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='w-full h1/6 flex text-lg'>
                <span className='w-5/6'>{name}</span>
                <span className='w-1/6 text-right'>{price}$</span>
            </div>
            <div className="flex justify-end">
                <Button onClick={() => addItem(item)} type="button" value="Add to Cart" />
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
