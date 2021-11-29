import { connect } from "react-redux";
import CollectionPreview from "../../components/collection-preview";
import { selectShopCollections as selectCollections } from "../../redux/shop/shop.selectors";

function Shop({ collections }) {
  return (
    <div className='flex flex-col'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(Shop);
