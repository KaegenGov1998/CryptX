import React from "react";
import { Bitcoin } from "lucide-react";
import CardContent from "./components/CardContent";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import LiveMarket from "./components/LiveMarket";
import Transaction from "./components/Transaction";

const App = () => {
  return (
    <>
      <div className="flex flex-row h-full pb-9">
        <div>
        <SideBar />
        </div>


        <div className="w-full flex flex-col">
          <NavBar />

          <div className="flex mr-2">
            <CardContent
              CardContentIcon={Bitcoin}
              stockIncrease={true}
              stockPercent={0.22}
              stockPrice={22.222}
              stockName={"Bitcoin - BTC"}
            />
            <CardContent
              CardContentIcon={Bitcoin}
              stockIncrease={false}
              stockPercent={0.22}
              stockPrice={22.222}
              stockName={"Bitcoin - BTC"}
            />
          </div>
          <div className="flex mr-2">
            <CardContent
              CardContentIcon={Bitcoin}
              stockIncrease={true}
              stockPercent={0.22}
              stockPrice={22.222}
              stockName={"Bitcoin - BTC"}
            />
            <CardContent
              CardContentIcon={Bitcoin}
              stockIncrease={false}
              stockPercent={0.22}
              stockPrice={22.222}
              stockName={"Bitcoin - BTC"}
            />
          </div>
          <div className="flex flex-row">
            <div className="div className='w-173 h-89.5 ml-10">
              <div className='font-semibold text-xl pb-6'>Live Market</div>
              <LiveMarket CryptoName={"Bitcoin"} TickerSymbol={"ETH / USDA"} Change={22.22} IsChangeIncrease={false} Price={1234} />
              <LiveMarket CryptoName={"Bitcoin"} TickerSymbol={"ETH / USDA"} Change={11.22} IsChangeIncrease={true} Price={1234} />
              <LiveMarket CryptoName={"Bitcoin"} TickerSymbol={"ETH / USDA"} Change={33.22} IsChangeIncrease={true} Price={1234} />
              <LiveMarket CryptoName={"Bitcoin"} TickerSymbol={"ETH / USDA"} Change={14.22} IsChangeIncrease={false} Price={1234} />
            </div>
            <div className="h-89.5 ml-15">
              <div className='font-semibold text-xl pb-6'>Transactions</div>
              <Transaction CryptoName={"Ethereum"} RecievedOrBuy={true} CashPrice={222222} Day={"Today"} Time={"19:30"}/>
              <Transaction CryptoName={"Bitcoin"} RecievedOrBuy={false} CashPrice={222222} Day={"Today"} Time={"19:30"}/>
              <Transaction CryptoName={"Bitcoin"} RecievedOrBuy={true} CashPrice={222222} Day={"Today"} Time={"19:30"}/>
              <Transaction CryptoName={"Litecoin"} RecievedOrBuy={false} CashPrice={222222} Day={"Today"} Time={"19:30"}/>

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
