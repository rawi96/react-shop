import { useState } from "react";
import CollectionPreview from "../../components/collection-preview";
import SHOP_DATA from "./shop.data";

function Shop() {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div className='flex flex-col'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
}

export default Shop;
