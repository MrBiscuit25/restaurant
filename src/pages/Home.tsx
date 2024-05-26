import Search from '../assets/search.svg?react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import OrderItem from '../components/OrderItem'
const Home = () => {
  const [searchIsActive, setSearchIsActive] = useState(false)
  return (
    <div className="grid grid-cols-3 gap-x-[20px] pl-[20px] ">
      <div className="col-span-2">
        <div className="row mb-5">
          <div className="flex justify-between mb-4 mt-8">
            <div className="leading-[140%]">
              <div className="text-4xl font-semibold pb-1">East Pearl</div>
              <div className="text-sm text-[#e0e6e9]">Tuesday,2 June 2023</div>
            </div>
            <div className={`flex self-start items-center p-3 rounded
              bg-[#2d303e] ${searchIsActive ? 'shadow shadow-[#EA7C69]' : ''}`}>
              <Search width={20} height={20} className={`mr-2 hover:text-[#EA7C69]`} style={{cursor:"pointer"}}/>
              <input onClick={() =>{setSearchIsActive(true)}} onBlur={()=>{
                setSearchIsActive(false)}} className="bg-transparent outline-none" 
                placeholder="Search for food,coffe,etc..."
                type="text"/>
            </div>
          </div>
          <div className="row">
            <nav>
              <ul className='flex justify-between'>
                <li className=''>
                  <NavLink to="/home/hot_dishes" 
                    // className={`min-h-8 inline-block relative`}
                    className={({isActive}) => [
                      isActive ? "active-dish" : "",
                      "dish__menu-item"
                    ].join(" ")}
                  >Hot Dishes</NavLink>
                </li>
                <li className=''>
                  <NavLink to="/home/cold_dishes" 
                    className={({isActive}) => [
                      isActive ? "active-dish" : "",
                      "dish__menu-item"
                    ].join(" ")}
                  >Cold Dishes</NavLink>
                </li>
                <li className=''>
                  <NavLink to="/home/soup" 
                    className={({isActive}) => [
                      isActive ? "active-dish" : "",
                      "dish__menu-item"
                    ].join(" ")}
                  >Soup</NavLink>
                </li>
                <li className=''>
                  <NavLink to="/home/grill" 
                    className={({isActive}) => [
                      isActive ? "active-dish" : "",
                      "dish__menu-item"
                    ].join(" ")}
                  >Grill</NavLink>
                </li>
                <li className=''>
                  <NavLink to="/home/appetizer" 
                    className={({isActive}) => [
                      isActive ? "active-dish" : "",
                      "dish__menu-item"
                    ].join(" ")}
                  >Appetizer</NavLink>
                </li>
                <li className=''>
                  <NavLink to="/home/dessert" 
                    className={({isActive}) => [
                      isActive ? "active-dish" : "",
                      "dish__menu-item"
                    ].join(" ")}
                  >Dessert</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className='flex items-start justify-between'>
          <div className="leading-[140%] text-2xl font-semibold ">Choose Dishes</div>
          <div className="takeout__order mb-14">
            <select className='takeout__order-select' name="" id="">
              <option value="dine_in">Dine in</option>
              <option value="to_go">To go</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>
        </div>
        <Outlet/>
      </div>
      <div className='flex flex-col bg-[#1f1f2b] p-6'>
        <div>Orders #34562</div>
        <ul className='flex'>
          <li><button>Dine in</button></li>
          <li><button>To Go</button></li>
          <li><button>Delivery</button></li>
        </ul>
        <div className='flex gap-x-10 border-b-[1px] border-[#abbbc2] pb-5 mb-[146px]'>
          <div>Item</div>
          <div className='ml-auto'>Qty</div>
          <div>Price</div>
        </div>
        <OrderItem/>
      </div>
    </div>
  )
}

export default Home
