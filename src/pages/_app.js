import Navbar from "../components/NavBar";
import "../styles/globals.css";
import connect from '../utils/mongo.config';
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
    <div>
      <Head>
        <title>Digital Monastery</title>
        
        <meta name="description" content="Learn about Batalha Monastery" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <Component  {...pageProps} />
    </div>
  );
}

export default MyApp;
