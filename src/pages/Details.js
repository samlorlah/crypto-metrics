import React from 'react';
import { useSelector } from 'react-redux';
import CoinDetails from '../components/CoinDetails';
import PageBanner from '../components/PageBanner';

const Details = () => {
  const coin = useSelector((state) => state.coins.coinDetails);
  return (
    <>
      <PageBanner
        title={coin.symbol}
        description={coin.name}
        subHeader={`Rank: ${coin.rank}`}
      />
      <CoinDetails />
    </>
  );
};

export default Details;
