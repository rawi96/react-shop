function MenuItem({ title, imageUrl, size }) {
  return (
    <div className={`${size ? 'h-64 w-1/2' : 'h-20 min-w-1/3'} flex-auto items-center justify-items-center border border-solid border-black overflow-hidden min-w-1/3`}>
      <div
        className=''
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  );
}

export default MenuItem;
