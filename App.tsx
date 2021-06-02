import React, {useState} from 'react';
import {mapProducts} from './src/mapping/customMap';
import {MyGlobalContext} from './src/context/GlobalContext';

import Routes from './Routes';

const App: React.FC = () => {
  const [cartWish, setCartWish] = useState<mapProducts | undefined>([]);

  return (
    <MyGlobalContext.Provider value={{cartWish, setCartWish}}>
      <Routes />
    </MyGlobalContext.Provider>
  );
};

export default App;
