import Dollar from "../../public/icons/money.svg?react";
import Total from "../../public/icons/total.svg?react";
import People from "../../public/icons/people.svg?react";
import Filter from "../../public/icons/filter.svg?react";
import ArrowUp from "../../public/icons/arrow_up.svg?react";
import StatisticsCard from "../components/StatisticsCard";
const Dashboard = () => {
  return (
    <div className="p-5 grid grid-cols-6 gap-3">
      <div className="col-span-4">
        <div className="title-wrapper  pb-6 mb-6 border-b-[1px] border-[#abbbc2]">
          <div className="title text-2xl leading-[140%] font-semibold">
            Dashboard
          </div>
          <div className="subtitle text-sm text-[#e0e6e9]">
            Tuesday,2 June 2023
          </div>
        </div>
        <div className="cards__wrapper flex gap-x-6">
          <StatisticsCard
            mainIcon={
              <Dollar
                className="border-[1px] border-[#9288E0] rounded-full"
                width="15"
                height="15"
              />
            }
            secondaryIcon={
              <div className="w-4 h-4 bg-[rgba(136,224,145,0.24)] rounded-full">
                <ArrowUp className="text-[#50d1aa]" />
              </div>
            }
            title="Total Dish Ordered"
            stats={
              <div className="text-sm text-[#50d1aa] leading-[140%] font-semibold">
                23,456%
              </div>
            }
            price="23,456"
          />
          <StatisticsCard
            mainIcon={<Total width="15" height="15" />}
            secondaryIcon={
              <div className="rotate-180 w-4 h-4 bg-[rgba(255,100,113,0.24)] rounded-full">
                <ArrowUp className="text-[#FF7CA3]" />
              </div>
            }
            title="Total Dish Ordered"
            stats={
              <div className="text-sm text-[#FF7CA3] leading-[140%] font-semibold">
                23,456%
              </div>
            }
            price="23,456"
          />
          <StatisticsCard
            mainIcon={<People className="" width="15" height="15" />}
            secondaryIcon={
              <div className="w-4 h-4 bg-[rgba(136,224,145,0.24)] rounded-full">
                <ArrowUp className="text-[#50d1aa]" />
              </div>
            }
            title="Total Dish Ordered"
            stats={
              <div className="text-sm text-[#50d1aa] leading-[140%] font-semibold">
                +2.40%
              </div>
            }
            price="1,234"
          />
        </div>
      </div>
      <div className="col-span-4 -mt-[3.6rem]">
        <div className="flex flex-col bg-[#1F1D2B] rounded-md p-4 leading-[140%] font-semibold">
          <div className="flex  items-center justify-between">
            <div className="text-2xl">Order Report</div>
            <div className="flex items-center cursor-pointer gap-x-2 border-[1px] border-[#abbbc2] p-2 rounded-xl hover:text-[#ea7c69] hover:border-[#ea7c69]">
              <Filter width="18" height="18" />
              <div>Filter Order</div>
            </div>
          </div>
          <div className=" max-h-[488px] overflow-y-auto scrollbar-thin scrollbar-webkit">
            <table className="w-full border-separate border-spacing-y-3">
              <thead className="">
                <tr className="text-left">
                  <th>Customer</th>
                  <th>Menu</th>
                  <th>Total Payment</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <tbody className="text-[#e0e6e9] font-normal">
                <tr>
                  <th className="h-5 border-b-[1px] border-[#abbbc2]"></th>
                  <th className="h-5 border-b-[1px] border-[#abbbc2]"></th>
                  <th className="h-5 border-b-[1px] border-[#abbbc2]"></th>
                  <th className="h-5 border-b-[1px] border-[#abbbc2]"></th>
                </tr>
                <tr>
                  <td>Eren Jaegar</td>
                  <td>Spicy seasoned seafood noodles </td>
                  <td>$125</td>
                  <td className="">
                    <div className="bg-[rgba(107,226,190,0.24)] text-center text-sm text-[#50d1aa] py-1 px-3 rounded-full">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Reiner Braun</td>
                  <td>Salted Pasta with mushroom sauce</td>
                  <td>$145</td>
                  <td>
                    <div className="bg-[rgba(146,144,254,0.2)] text-center text-sm text-[#9290fe] py-1 px-3 rounded-full">
                      Preparing
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Levi Ackerman</td>
                  <td>Beef dumpling in hot and sour soup</td>
                  <td>$105</td>
                  <td>
                    <div className="bg-[rgba(255,181,114,0.2)] text-center text-sm text-[#ffb572] py-1 px-3 rounded-full">
                      Pending
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Historia Reisis</td>
                  <td>Hot spicy fried rice with omelet</td>
                  <td>$45</td>
                  <td className="">
                    <div className="bg-[rgba(107,226,190,0.24)] text-center text-sm text-[#50d1aa] py-1 px-3 rounded-full">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Hanji Zoe</td>
                  <td>Hot spicy fried rice with omelet</td>
                  <td>$45</td>
                  <td className="">
                    <div className="bg-[rgba(107,226,190,0.24)] text-center text-sm text-[#50d1aa] py-1 px-3 rounded-full">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Armin</td>
                  <td>Hot spicy fried rice with omelet</td>
                  <td>$45</td>
                  <td className="">
                    <div className="bg-[rgba(107,226,190,0.24)] text-center text-sm text-[#50d1aa] py-1 px-3 rounded-full">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Armin</td>
                  <td>Hot spicy fried rice with omelet</td>
                  <td>$45</td>
                  <td className="">
                    <div className="bg-[rgba(107,226,190,0.24)] text-center text-sm text-[#50d1aa] py-1 px-3 rounded-full">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Armin</td>
                  <td>Hot spicy fried rice with omelet</td>
                  <td>$45</td>
                  <td className="">
                    <div className="bg-[rgba(107,226,190,0.24)] text-center text-sm text-[#50d1aa] py-1 px-3 rounded-full">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Armin</td>
                  <td>Hot spicy fried rice with omelet</td>
                  <td>$45</td>
                  <td className="">
                    <div className="bg-[rgba(107,226,190,0.24)] text-center text-sm text-[#50d1aa] py-1 px-3 rounded-full">
                      Completed
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Armin</td>
                  <td>Hot spicy fried rice with omelet</td>
                  <td>$45</td>
                  <td className="">
                    <div className="bg-[rgba(107,226,190,0.24)] text-center text-sm text-[#50d1aa] py-1 px-3 rounded-full">
                      Completed
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <aside className="col-start-5 col-end-7 row-span-full bg-[#1F1D2B] rounded-md p-6">
        <div className="flex justify-between pb-4 mb-4 border-b-[1px] border-[#abbbc2]">
          <div>Most Ordered</div>
          <div className="dish__select">
            <select className="dish__select-expand bg-[#1F1D2B]" name="" id="">
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="weekago">Week Ago</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <div className="flex gap-x-4">
            <img width="50" height="50" src="./images/1.svg" alt="noodles" />
            <div className="">
              <div>Spicy seasoned seafood noodles</div>
              <div className="text-sm text-[#abbbc2]">200 dishes ordered</div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <img width="50" height="50" src="./images/2.svg" alt="noodles" />
            <div className="">
              <div>Salted pasta with mushroom sauce</div>
              <div className="text-sm text-[#abbbc2]">120 dishes ordered</div>
            </div>
          </div>
          <div className="flex gap-x-4">
            <img width="50" height="50" src="./images/3.svg" alt="noodles" />
            <div className="">
              <div>Beef dumpling in hot and sour soup</div>
              <div className="text-sm text-[#abbbc2]">80 dishes ordered</div>
            </div>
          </div>
          <button className="text-[#ea7c69] border-[1px] border-[#ea7c69] rounded-lg p-3 hover:bg-[#ea7c69] hover:text-white">
            View All
          </button>
        </div>
      </aside>
      <aside className="col-start-5 col-end-7 p-6 bg-[#1F1D2B] rounded-lg">
        <div className="flex justify-between mb-7 lg:mb-14">
          <div className="">Mosty Type of Order</div>
          <div className="dish__select flex">
            <select
              className="dish__select-expand self-stretch bg-[#1F1D2B]"
              name=""
              id=""
            >
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="weekago">Week Ago</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 lg:flex-row lg:justify-around lg:items-center">
          <img src="/images/Circle.svg" width="176" height="176" alt="" />
          <div className="">
            <div className="flex gap-x-2">
              <div className="w-6 h-6 bg-[#ff7ca3] rounded-full"></div>
              <div className="flex flex-col">
                <div className="font-semibold">Dine in</div>
                <div className="text-[#abbbc2]">200 customers</div>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="w-6 h-6 bg-[#ffb572] rounded-full"></div>
              <div className="flex flex-col">
                <div className="font-semibold">To Go</div>
                <div className="text-[#abbbc2]">122 customers</div>
              </div>
            </div>
            <div className="flex gap-x-2">
              <div className="w-6 h-6 bg-[#65b0f6] rounded-full"></div>
              <div className="flex flex-col">
                <div className="font-semibold">Delivery</div>
                <div className="text-[#abbbc2]">264 customers</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
