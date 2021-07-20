import React from 'react';
import ReactDOM from 'react-dom';
import TeleApp from './tele'
import {ContextProvider} from './context'

const Tele = () => {
   return(
      <>
        <TeleApp/>
      </>
   );
}

ReactDOM.render(
  <ContextProvider>
    <Tele />
  </ContextProvider>,
  document.getElementById('root'),
  );

export default Tele
