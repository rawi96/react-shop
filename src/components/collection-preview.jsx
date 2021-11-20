import CollectionItem from "./collection-item";

function CollectionPreview({title, items}) {
    return (

        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold mb-3 pl-3'>{title.toUpperCase()}</h1>
            <div className='flex flex-wrap'>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))}
            </div>
        </div>

    );
}

export default CollectionPreview;
