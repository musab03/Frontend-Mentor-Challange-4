 import PerfumeImg from './images/image-product-desktop.jpg'
 import PerfumeImgMb from './images/image-product-mobile.jpg'
 import icon from "./images/icon-cart.svg"

function App() {


  

  return (
    <>
     <div className="flex flex-col md:flex-row w-full max-w-sm mx-auto m-16 ">
      <img src={ window.innerWidth <=768 ? PerfumeImgMb : PerfumeImg}  alt="" className='rounded-tl-xl md:rounded-l-xl'  />
      <div className='bg-white py-8 px-6 md:px-8 flex flex-col rounded-br-xl md:rounded-r-xl  '>
        <h2 className='text-xl font-extralight'>Perfume</h2>
        <h1 className='text-4xl font-extrabold mt-4'>Gabrielle Essence Eau De Parfum</h1>
        <p className='mt-6 text-gray-500 '>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creator for the House of CHANEL</p>

        <div className=' mt-12 flex flex-row items-center space-x-4'>
          
        <p className='text-6xl text-[#3E8168]'>$149.99</p>
        <p className='text-lg line-through font-extralight text-gray-400'>$169.99</p>
        </div>

        <button className='flex items-center justify-center mt-16 bg-[#3E8168] rounded-lg py-2 text-white font-bold'>
           <img src={icon} alt="cart icon" className='mr-2' /> 
           Add to Cart
           </button>
      </div>
     </div>

    


    </>
  )
}

export default App
