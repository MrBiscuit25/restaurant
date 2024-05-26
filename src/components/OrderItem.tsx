import TrashBin from '../assets/TrashBin.svg?react'

const OrderItem = ({price,name,image}) => {
  return (
    <div className="flex gap-x-4">
      <div className="grow">
        <div className="flex">
          <img className="self-start pt-2" src={image} width="40" height="40" alt=""/>
          <div className="text-shrink flex flex-col mb-4 ml-2 font-medium">
            <div>
            {name}
            </div>
            <div className="text-sm text-[#abbbc2]">$ {price}</div>
          </div>
          <input className="max-w-12 max-h-12 rounded ml-auto bg-[#2d303e] text-[#889898] pl-4 mb-2"  
            type="number"
            min={1}
          />
        </div>
        <input className="rounded min-w-70 w-[100%] h-12 bg-[#2d303e] text-[#889898] pl-3" placeholder="Order Note..." type="text"/>
      </div>
      <div className='flex flex-col justify-between'>
        <div className="pt-3 font-medium text-md">${price}</div>
        <button className='p-3 text-[#ea7c69] hover:text-white border-[1px] border-[#ea7c69]  hover:bg-[#ea7c69]  rounded'>
          <TrashBin/>
        </button>
      </div>
    </div>
  )
}

export default OrderItem
