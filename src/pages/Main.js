import React from 'react';
import { useSelector } from 'react-redux';
import MainData from '../components/MainData';
import PageBanner from '../components/PageBanner';

const Main = () => {
  const { coins } = useSelector((state) => state.coins);
  return (
    <>
      <PageBanner title="Crypto Metrics" description="Sort By Currency" subHeader={`${coins.length} Coins`} />
      <MainData />
    </>
  );
};

export default Main;
