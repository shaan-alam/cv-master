import ContextProvider from "../Context/Context";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
      <div id="modal"></div>
    </ContextProvider>
  );
}

export default MyApp;
