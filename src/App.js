import React, {useState} from 'react';
import NavBar from './component/NavBar';
import InfoPanel from './component/InfoPanel';
import FooterNav from './component/FooterNav';


function App() {
  const ScreenConfig = useState(0);
  return (
    <div className="App">
      <NavBar />
      <InfoPanel currentScreen = {ScreenConfig[0]}  />
      <FooterNav ScreenConfig ={ScreenConfig} />
    </div>
  );
}

export default App;
