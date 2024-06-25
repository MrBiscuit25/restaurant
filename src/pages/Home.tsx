import Search from "../assets/search.svg?react";
import Arrow from "../../public/icons/arrow.svg?react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import OrderItem from "../components/OrderItem";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [OrderTypeButtons, setOrderTypeButtons] = useState([
    { id: 0, title: "Dine in", active: false },
    { id: 1, title: "To Go", active: false },
    { id: 2, title: "Delivery", active: false },
  ]);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [query, setQuery] = useState("");
  const order = useSelector((state) => state.order);

  const [orderSidebar, setOrderSidebar] = useState("closed");
  const currentTime = new Date();
  const day_week = weekday[currentTime.getDay()];
  const month = months[currentTime.getMonth()];
  const day = currentTime.getDate();

  let subtotal = order.reduce((acc, cur) => acc + cur.price * cur.count, 0);
  return (
    <div
      className={
        orderSidebar == "open" ? "orders_side-open" : "orders_side-closed"
      }
    >
      <div className="col-span-2">
        <div className="row mb-5">
          <div className="flex mb-4 mt-8">
            <div className="leading-[140%]">
              <div className="text-4xl font-semibold pb-1">East Pearl</div>
              <div className="text-sm text-[#e0e6e9]">{`${day_week}, ${month} ${day}`}</div>
            </div>
            <div
              className={`flex mr-2 self-start items-center p-3 rounded ml-auto
              bg-[#2d303e] ${searchIsActive ? "shadow shadow-[#EA7C69]" : ""}`}
            >
              <Search
                width={20}
                height={20}
                className={`mr-2 hover:text-[#EA7C69] `}
                style={{ cursor: "pointer" }}
              />
              <input
                onClick={() => {
                  setSearchIsActive(true);
                }}
                onBlur={() => {
                  setSearchIsActive(false);
                }}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                value={query}
                className="bg-transparent outline-none"
                placeholder="Search for food,coffe,etc..."
                type="search"
              />
            </div>
            {orderSidebar == "open" ? (
              <button
                className="px-2 self-start py-1 rounded text-black border-[1px] border-[#393c49] bg-[#EA7C69] hover:text-white"
                onClick={() => setOrderSidebar("closed")}
              >
                <Arrow className="w-[100%] h-[38px] rotate-180" />
              </button>
            ) : (
              <button
                className="px-2 self-start py-1 rounded text-black border-[1px] border-[#393c49] bg-[#EA7C69] hover:text-white"
                onClick={() => setOrderSidebar("open")}
              >
                <Arrow className="w-[100%] h-[38px]" />
              </button>
            )}
          </div>
          <div className="row">
            <nav>
              <ul className="flex justify-around">
                <li className="">
                  <NavLink
                    to="/home/hot_dishes"
                    // className={`min-h-8 inline-block relative`}
                    className={({ isActive }) =>
                      [isActive ? "active-dish" : "", "dish__menu-item"].join(
                        " ",
                      )
                    }
                  >
                    Hot Dishes
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/home/cold_dishes"
                    className={({ isActive }) =>
                      [isActive ? "active-dish" : "", "dish__menu-item"].join(
                        " ",
                      )
                    }
                  >
                    Cold Dishes
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/home/soup"
                    className={({ isActive }) =>
                      [isActive ? "active-dish" : "", "dish__menu-item"].join(
                        " ",
                      )
                    }
                  >
                    Soup
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/home/grill"
                    className={({ isActive }) =>
                      [isActive ? "active-dish" : "", "dish__menu-item"].join(
                        " ",
                      )
                    }
                  >
                    Grill
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/home/appetizer"
                    className={({ isActive }) =>
                      [isActive ? "active-dish" : "", "dish__menu-item"].join(
                        " ",
                      )
                    }
                  >
                    Appetizer
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to="/home/dessert"
                    className={({ isActive }) =>
                      [isActive ? "active-dish" : "", "dish__menu-item"].join(
                        " ",
                      )
                    }
                  >
                    Dessert
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <div className="leading-[140%] text-2xl font-semibold mb-10">
            Choose Dishes
          </div>
        </div>
        <Outlet context={query} />
      </div>
      {orderSidebar == "closed" ? (
        ""
      ) : (
        <div className="flex flex-col bg-[#1f1f2b] p-6 gap-y-6 self-start rounded-b-2xl">
          <div className="flex justify-between">
            <div> Orders #34562</div>
          </div>
          <ul className="flex gap-x-2 text-sm text-[#EA7C69]">
            {OrderTypeButtons.map((OrderButton) => (
              <li key={OrderButton.id}>
                <button
                  onClick={(e) => {
                    let newArr = [...OrderTypeButtons];
                    newArr.forEach((ord) => (ord.active = false));
                    newArr.splice(OrderButton.id, 1, {
                      id: OrderButton.id,
                      title: OrderButton.title,
                      active: !OrderButton.active,
                    });
                    setOrderTypeButtons(newArr);
                  }}
                  className={`px-2 py-1 rounded border-[1px] border-[#393c49] hover:bg-[#EA7C69] hover:text-white ${OrderButton.active ? "active-button" : ""}`}
                >
                  {OrderButton.title}
                </button>
              </li>
            ))}
          </ul>
          <div className="flex gap-x-10 border-b-[1px] border-[#abbbc2] pb-5 mb-[45px]">
            <div>Item</div>
            <div className="ml-auto">Qty</div>
            <div>Price</div>
          </div>
          <div className="gutter flex flex-col gap-y-6 max-h-[488px]  overflow-y-auto scrollbar-thin scrollbar-webkit">
            {order.map((item) => (
              <OrderItem
                id={item.id}
                count={item.count}
                key={`${item.name}-${item.price}`}
                price={item.price}
                name={item.name}
                image={item.image}
                category={item.category}
              />
            ))}
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-[#abbbc2]">Discount</div>
            <div className="i">$0</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-[#abbbc2]">Sub total</div>
            <div className="i">$ {subtotal.toFixed(2)}</div>
          </div>
          <button className="py-3 border-[1px] rounded-xl hover:text-[#fff] hover:border-transparent hover:bg-[#EA7C69] text-[#EA7C69] border-[#EA7C69]">
            Continue to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
