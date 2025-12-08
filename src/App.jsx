import React from 'react'
import { Bitcoin } from 'lucide-react';
import CardContent from './components/CardContent'
import NavBar from './components/NavBar';


const App = () => {
  return (
    <>

    <NavBar />

    <div className='flex gap-2'>
    <CardContent CardContentIcon = {Bitcoin} stockIncrease={true} stockPercent={0.22} stockPrice={22.222} stockName={'Bitcoin - BTC'}/>
    <CardContent CardContentIcon = {Bitcoin} stockIncrease={true} stockPercent={0.22} stockPrice={22.222} stockName={'Bitcoin - BTC'}/>
    </div>
    <div className='flex gap-2'>
    <CardContent CardContentIcon = {Bitcoin} stockIncrease={true} stockPercent={0.22} stockPrice={22.222} stockName={'Bitcoin - BTC'}/>
    <CardContent CardContentIcon = {Bitcoin} stockIncrease={true} stockPercent={0.22} stockPrice={22.222} stockName={'Bitcoin - BTC'}/>
    </div>
    </>
  )
}

export default App