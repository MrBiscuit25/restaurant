import Search from '../assets/search.svg?react'
import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
const Dashboard = () => {
  const [searchIsActive, setSearchIsActive] = useState(false)
  console.log(searchIsActive)
  return (
    <div className="grid grid-cols-3 gap-x-[20px] px-[20px] mt-5">
      <div className="col-span-2">
        <div className="row mb-5">
          <div className="flex justify-between mb-4">
            <div className="leading-[140%]">
              <div className="text-[26px] font-semibold pb-1">East Pearl</div>
              <div className="text-[14.5px] text-[#e0e6e9]">Tuesday,2 June 2023</div>
            </div>
            <div className={`flex self-start items-center p-3 rounded
              bg-[#2d303e] ${searchIsActive ? 'shadow-inner shadow-[#EA7C69]/50' : ''}`}>
              <Search width={20} height={20} className={`mr-2 ${searchIsActive ?
              "text-[#EA7C69]":""}`} style={{cursor:"pointer"}}/>
              <input onClick={() =>{setSearchIsActive(true)}} onBlur={()=>{
                setSearchIsActive(false)}} className="bg-transparent outline-none" 
                placeholder="Search for food,coffe,etc..."
                type="text"/>
            </div>
          </div>
          <div className="row">
            <nav>
              <ul className='flex gap-x-7'>
                <li className=''>
                  <NavLink to="/dashboard/hot_dishes" 
                    // className={`min-h-8 inline-block ${({isActive}) => isActive ? "active-dish" : ''}`}
                    className={({isActive}) => isActive ? "active-dish min-h-8 inline-block" : "min-h-8 inline-block"}
                  >Hot Dishes</NavLink>
                </li>
                <li className=''>
                  <NavLink to="/dashboard/cold_dishes" 
                    // className={`min-h-8 inline-block ${({isActive}) => isActive ? "active-dish" : ''}`}
                    className={({isActive}) => isActive ? "active-dish min-h-8 inline-block" : "min-h-8 inline-block"}
                  >Cold Dishes</NavLink>
                </li>
                <li>
                  <a href="#">Soup</a>
                </li>
                <li>
                  <a href="#">Grill</a>
                </li>
                <li>
                  <a href="#">Appetizer</a>
                </li>
                <li>
                  <a href="#">Dessert</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      <div className="leading-[140%] text-xl font-semibold">Choose Dishes</div>
        <Outlet/>
      </div>
      <div>2</div>
    </div>
  )
}

export default Dashboard
