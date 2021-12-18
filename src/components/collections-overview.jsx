import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview, selectShopCollections } from "../redux/shop/shop.selectors";
import collectionItem from "./collection-item";
import CollectionPreview from "./collection-preview";

function CollectionsOverview({ collections }) {

    return (<div className='flex flex-col'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>)
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);

