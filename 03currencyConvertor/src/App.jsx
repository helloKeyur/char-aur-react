import { useState } from 'react';
import './App.css';
import {InputBox} from "./components";
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");

  const currencyInfo = useCurrencyInfo(fromCurrency);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFromCurrency(toCurrency);
    setFromAmount(toAmount);
    setToCurrency(fromCurrency);
    setToAmount(fromAmount);
  }

  const convert = () => {
    setToAmount(fromAmount * currencyInfo[toCurrency]);
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://i.pinimg.com/originals/22/a5/a7/22a5a7b9dbc0e29ccef006dea5981367.png')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm" style={{"background": "#918bb42b"}}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={fromAmount}
                            currencyOptions={options}
                            selectedCurrency={fromCurrency}
                            onAmountChange={(amount)=>setFromAmount(amount)}
                            onCurrencyChange={(currency)=>setFromCurrency(currency)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={toAmount}
                            currencyOptions={options}
                            selectedCurrency={toCurrency}
                            onAmountChange={(amount)=>setToAmount(amount)}
                            onCurrencyChange={(currency)=>setToCurrency(currency)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {fromCurrency} to {toCurrency}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App
