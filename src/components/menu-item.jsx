import { useNavigate } from "react-router-dom"

function MenuItem({ title, imageUrl, size, linkUrl }) {

  const navigator = useNavigate();

  const navigate = () => {
    navigator(linkUrl)
  }

  return (
    <div onClick={navigate} className={`${size ? 'md:w-1/2' : 'md:w-1/3'} w-full my-3 px-3 overflow-hidden cursor-pointer rounded`}>
      <div className={`${size ? 'h-96' : 'h-64'} relative rounded`}>
        <div className="w-full h-full overflow-hidden">
          <div
            className='w-full h-full bg-cover bg-center rounded transform transition duration-500 hover:scale-110'
            style={{
              backgroundImage: `url(${imageUrl})`
            }}
          />
          <div className='absolute h-36 w-36 flex flex-col justify-center items-center flex-wrap pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded bg-white bg-opacity-80'>
            <h1 className='font-bold text-4xl block'>{title.toUpperCase()}</h1>
            <span className='font-light text-2xl block'>Shop Now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
