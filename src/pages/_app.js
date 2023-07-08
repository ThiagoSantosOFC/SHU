import React from 'react';
import App from 'next/app';
import NavBar from '../components/itl/NavBar';
import SelectLang from '../components/itl/SelectLang';
import '../styles/globals.css';
import Footer from '../components/itl/footer';



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
        <NavBar  lang={selectedLanguage} />
        <Component {...pageProps} lang={selectedLanguage} />
        <Footer />
      </>
    );
  }
}

export default NWH;