import React from 'react';
import App from 'next/app';
<<<<<<< HEAD
import '../styles/globals.css';


=======
import NavBar from '../components/NavBar';
import SelectLang from '../components/SelectLang';
import '../styles/globals.css';
import Footer from '../components/footer';
>>>>>>> parent of 6cf43d3 (Merge branch 'main' of https://github.com/ThiagoSantosOFC/SHU)

class NWH extends App {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'italian',
    };
  }

  handleLanguageChange = (event) => {
    this.setState({ selectedLanguage: event.target.value });
  };

  render() {
    const { Component, pageProps } = this.props;
    const { selectedLanguage } = this.state;

    return (
      <>
        <NavBar/>
        <Component {...pageProps} lang={selectedLanguage} />
        <Footer />
      </>
    );
  }
}

export default NWH;