import { useState } from "react";
import { Input } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, SetAmount] = useState(0);
  const [from, SetFrom] = useState("usd");
  const [to, SetTo] = useState("inr");
  const [convertedAmount, SetConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    SetFrom(to);
    SetTo(from);
    SetConvertedAmount(amount);
    SetAmount(convertedAmount);
  };

  const convert = () => {
    SetConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}>
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => SetFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => SetAmount(amount)}
                // amountDisable
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="font-sans absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-lg bg-red-600 text-white px-2 py-1"
                onClick={swap}>
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => SetTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="font-sans w-full bg-green-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}{" "}
              {convertedAmount}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
