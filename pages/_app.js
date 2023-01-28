import '../styles/globals.css';

//Internal css import 
import { NavBar } from '../Components/index';
import { SwapTokenContextProvider } from '../Context/SwapContext';

const  MyApp = ({ Component, pageProps }) => (
  <div>
    <SwapTokenContextProvider>
    <NavBar />
    <Component {...pageProps} />
    </SwapTokenContextProvider>
    
  </div>
)

export default MyApp;
