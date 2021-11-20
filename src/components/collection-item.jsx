function CollectionItem({ imageUrl, name, price }) {
    return (
        <div className='sm:w-1/2 md:w-1/4 w-full h-96 px-3 mb-20'>
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
        </div>
    );
}

export default CollectionItem;
