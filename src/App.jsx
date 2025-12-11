import React from "react";
import { graph1, graph2, graph3 } from "./assets";
import {
  Bitcoin, Infinity, LayoutGrid,
  Dot,
  ChartPie,
  Wallet,
  Mail,
  Settings,
  LogOut,
} from "lucide-react";
import CardContent from "./components/CardContent";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import LiveMarket from "./components/LiveMarket";
import Transaction from "./components/Transaction";
import BTCPrices from "./components/BTCPrices";

const App = () => {
  return (
    <>
      <div className="flex flex-row pb-11.5">
        <div>
          <div className="flex flex-col w-66 h-full pl-10 bg-[#F3F3F3]">

            {/*Banner*/}
            <div className="flex flex-row items-center mt-8 mb-16 gap-2.5 font-bold text-2xl">
              <div className="text-[#6154F0]">
                <Infinity />
              </div>
              CryptX
            </div>

            <SideBar Icon={LayoutGrid} PageName={'Overview'} />
            <SideBar Icon={ChartPie} PageName={'Chart'} />
            <SideBar Icon={LayoutGrid} PageName={'Transactions'} />
            <SideBar Icon={Wallet} PageName={'Wallet'} />
            <SideBar Icon={Mail} PageName={'Mail Box'} />
            <SideBar Icon={Settings} PageName={'Setting'} />
            <SideBar Icon={LogOut} PageName={'Logout'} />

          </div>
        </div>


        <div className="w-full flex flex-col">
          <NavBar />

          <div className="flex flex-row">

            <div className="flex flex-col">

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

            </div>

            <div className="pl-7">
              <BTCPrices />
            </div>

          </div>

          <div className="flex flex-row">
            <div className="div className='w-173 h-89.5 ml-10">
              <div className='font-semibold text-xl pb-6'>Live Market</div>
              <LiveMarket CryptoName={"Ethereum"} TickerSymbol={"ETH / USDA"} Change={22.22} IsChangeIncrease={false} Price={1234} graphImage={graph1} />
              <LiveMarket CryptoName={"Bitcoin"} TickerSymbol={"ETH / USDA"} Change={11.22} IsChangeIncrease={true} Price={1234} graphImage={graph2} />
              <LiveMarket CryptoName={"Litecoin"} TickerSymbol={"ITH / USDA"} Change={33.22} IsChangeIncrease={true} Price={1234} graphImage={graph1} />
              <LiveMarket CryptoName={"Cardano"} TickerSymbol={"ADA / USDA"} Change={14.22} IsChangeIncrease={false} Price={1234} graphImage={graph3} />
            </div>
            <div className="h-89.5 ml-15">
              <div className='font-semibold text-xl pb-6'>Transactions</div>
              <Transaction CryptoName={"Ethereum"} RecievedOrBuy={true} CashPrice={222222} Day={"Today"} Time={"19:30"} />
              <Transaction CryptoName={"Bitcoin"} RecievedOrBuy={false} CashPrice={222222} Day={"Today"} Time={"17:22"} />
              <Transaction CryptoName={"Bitcoin"} RecievedOrBuy={true} CashPrice={222222} Day={"Today"} Time={"09:35"} />
              <Transaction CryptoName={"Litecoin"} RecievedOrBuy={false} CashPrice={222222} Day={"Today"} Time={"29:30"} />

            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default App;
