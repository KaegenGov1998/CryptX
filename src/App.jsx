import React from "react";
import { Bitcoin } from "lucide-react";
import CardContent from "./components/CardContent";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import LiveMarket from "./components/LiveMarket";

const App = () => {
  return (
    <>
      <div className="flex">
        <SideBar />


        <div className="w-full">
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
              stockIncrease={true}
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
              stockIncrease={true}
              stockPercent={0.22}
              stockPrice={22.222}
              stockName={"Bitcoin - BTC"}
            />
          </div>
          
        </div>
        <LiveMarket />
      </div>
    </>
  );
};

export default App;
