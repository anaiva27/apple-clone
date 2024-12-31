import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from "../constants"
const Navbar = () => {
  return (
    <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
        <nav className='flex w-full screen-max-width'>
            <img src={appleImg} alt="Apple" width={14} height={18}/>

            <div className='flex flex-1 justify-center max-sm:hidden'>
              {navLists.map((item, index) => (
                <div key={item+index} className='px-5 text-sm curson-pointer text-gray hover:text-white transition-all'>{item}</div>
              ))}
            </div>

            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
              <img src={searchImg} alt="Search" width={18} height={18}/>
              <img src={bagImg} alt="Bag" width={18} height={18}/>
            </div>
        </nav>
    </header>
  )
}

export default Navbar