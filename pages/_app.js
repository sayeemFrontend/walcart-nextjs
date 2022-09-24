import { Provider } from "react-redux";
import Layout from "../layout/Layout";
import { store } from "../redux/store";
import "../styles/globals.css";

//starting point check path and it's component then render it

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </Provider>
  );
}

export default MyApp;
