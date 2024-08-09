const Payment = ({ cancelConfirmation }) => {
  return (
    <div className="flex flex-col bg-[#1f1f2b] p-6 gap-y-6 self-start rounded-r-2xl self-stretch flex-1 border-l-[1px] border-solid border-gray-500">
      <div className="text-2xl">Payment</div>
      <div className="text-sm text-[#abbbc2] border-b-[1px] pb-[70px] ">
        3 payment method availiable
      </div>
      <div className="text-xl">Payment Method</div>
      <div className="cards flex gap-x-[10px] justify-between">
        <div className="card p-2 border-solid flex flex-col items-center justify-between border-2 border-gray-500 rounded-lg min-w-[100px]">
          <img src="/icons/CreditCard.svg" width="55" height="40" alt="" />
          <div>Credit Card</div>
        </div>
        <div className="card p-2 border-solid flex flex-col items-center justify-between border-2 border-gray-500 rounded-lg min-w-[100px]">
          <img src="/icons/Paypal.svg" width="40" height="40" alt="" />
          <div>Paypal</div>
        </div>
        <div className="card p-2 border-solid flex flex-col items-center justify-between border-2 border-gray-500 rounded-lg min-w-[100px]">
          <img src="/icons/Wallet.svg" width="40" height="40" alt="" />
          <div>Cash</div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="input-field flex flex-col">
          <label htmlFor="">Cardholder Name</label>
          <input
            className="bg-[#2D303E] p-2 rounded-lg"
            type="text"
            placeholder="type your name ..."
          />
        </div>
        <div className="input-field flex flex-col">
          <label htmlFor="">Card Number</label>
          <input
            className="bg-[#2D303E] p-2 rounded-lg"
            type="text"
            placeholder="type your card number ..."
          />
        </div>
        <div className="pb-4 border-b-[1px] border-solid border-gray-500 flex flex gap-x-[10px]">
          <div className="input-field flex flex-col">
            <label htmlFor="">Expiration Date</label>
            <input
              className="bg-[#2D303E] p-2 rounded-lg"
              type="text"
              placeholder="02/2024"
            />
          </div>
          <div className="input-field flex flex-col">
            <label htmlFor="">CVV</label>
            <input
              className="bg-[#2D303E] p-2 rounded-lg"
              type="password"
              placeholder="type your card number ..."
            />
          </div>
        </div>
        <div className="pb-4 border-b-[1px] border-solid border-gray-500 flex gap-x-[10px]">
          <div className="input-field flex flex-col">
            <label htmlFor="">Order Type</label>
            <input
              className="bg-[#2D303E] p-2 rounded-lg"
              type="text"
              placeholder="02/2024"
            />
          </div>
          <div className="input-field flex flex-col">
            <label htmlFor="">Table no.</label>
            <input
              className="bg-[#2D303E] p-2 rounded-lg"
              type="text"
              placeholder="140"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-x-[10px] mt-auto">
        <button
          onClick={() => cancelConfirmation()}
          className="grow py-3 border-[1px] rounded-xl hover:text-[#fff] hover:border-transparent hover:bg-[#EA7C69] text-[#EA7C69] border-[#EA7C69]"
        >
          Cancel
        </button>
        <button className="grow py-3 border-[1px] rounded-xl hover:text-[#fff] hover:border-transparent hover:bg-[#EA7C69] text-[#EA7C69] border-[#EA7C69]">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
