import { useParams } from "react-router";
import CollectionsOverview from "../../components/collections-overview";
import Collection from "../collection";

function Shop() {
  const params = useParams();
  return (
    <div className='flex flex-col'>
      {params.collectionName ? <Collection collectionName={params.collectionName} /> : <CollectionsOverview />}
    </div>
  );
}

export default Shop;
