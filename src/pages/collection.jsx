import { connect } from "react-redux";
import CollectionItem from "../components/collection-item";
import { selectCollection } from "../redux/shop/shop.selectors";

function Collection({ collectionName, collection }) {
  
  return (
    <div>
      <h2 className="font-bold text-4xl text-center my-10">{collectionName}</h2>
      <div className="flex flex-wrap">
        {collection.items.map(item => <CollectionItem key={item.id} item={item} />)}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.collectionName)(state)
});

export default connect(mapStateToProps)(Collection);
