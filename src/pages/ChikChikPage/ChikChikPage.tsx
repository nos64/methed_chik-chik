import Header from '../../components/Header';
import React from 'react';
import Hero from '../../components/Hero';
import Price from '../../components/Price';
import About from '../../components/About';
import Reserve from '../../components/Reserve';
import Footer from '../../components/Footer';

const ChikChikPage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Price />
        <About />
        <Reserve />
      </main>
      <Footer />
    </>
  );
};

export default ChikChikPage;
