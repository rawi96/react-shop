import { useEffect, useState } from "react";
import { useParams } from "react-router";
import CollectionsOverview from "../../components/collections-overview";
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import Collection from "../collection";
import { collection, getDocs } from "firebase/firestore";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner";

function Shop({ updateCollections }) {
  const params = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
  const CollectionsWithSpinner = WithSpinner(Collection);

  useEffect(() => {
    getCollectionsSnapshot().then((data) => {
      const transformedCollection = data.map(doc => {
        const { title, items, id } = doc;
        return {
          routeName: encodeURI(title.toLowerCase()),
          id: id,
          title,
          items
        }
      });

      const reduced = transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
      }, {});

      updateCollections(reduced);
      setIsLoading(false);


    });

  }, updateCollections);

  const getCollectionsSnapshot = async () => {
    const snapshot = await firestore.collection('collections').get();
    return snapshot.docs.map(doc => doc.data());
  }


  return (
    <div className='flex flex-col'>
      {params.collectionName ? <CollectionsWithSpinner isLoading={isLoading} collectionName={params.collectionName} /> : <CollectionsOverviewWithSpinner isLoading={isLoading} />}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) => dispatch(updateCollections(collectionMap))
});

export default connect(null, mapDispatchToProps)(Shop);
