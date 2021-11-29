import CollectionItem from "./collection-item";
import { useNavigate } from "react-router-dom"


function CollectionPreview({ title, items }) {

    const navigator = useNavigate();

    const navigate = () => {
        // ugly AF
      navigator(title.toLowerCase())
    }

    return (
        <div className='flex flex-col'>
            <h1 onClick={navigate} className='text-2xl font-bold mb-3 pl-3 cursor-pointer'>{title.toUpperCase()}</h1>
            <div className='flex flex-wrap'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>

    );
}

export default CollectionPreview;
