import Navbar from "../components/NavBar";
import "../styles/globals.css";
import Footer from "../components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>Nocera Water heritage</title>
        
        <meta name="description" content="Learn about Nocera water" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Component  {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
