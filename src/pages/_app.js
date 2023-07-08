import React from 'react';
import App from 'next/app';
import NavBar from '../components/NavBar';
import SelectLang from '../components/SelectLang';
import '../styles/globals.css';
import Footer from '../components/footer';

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