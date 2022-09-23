import Layout from "../layout/Layout";
import "../styles/globals.css";

//starting point check path and it's component then render it

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
