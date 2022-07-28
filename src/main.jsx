import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from "react-router-dom";
//import { FavProvider } from './context/FavContext'
import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        {/*<FavProvider>*/}
          <RecoilRoot>
            <App />
          </RecoilRoot> 
        {/*</FavProvider>*/}
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
)
