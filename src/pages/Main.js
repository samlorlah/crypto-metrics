import React from 'react';
import MainData from '../components/MainData';
import PageBanner from '../components/PageBanner';

const Main = () => (
  <>
    <PageBanner title="Crypto Metrics" description="Sort By Currency" counter="50" />
    <MainData />
  </>
);

export default Main;
