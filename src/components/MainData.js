import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoins } from '../redux/coinList/coinList';
import styles from './MainData.module.css';
import MainDataItem from './MainDataItem';

const MainData = () => {
  const { coins } = useSelector((state) => state.coins);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoins());
  }, []);
  return (
    <div className={styles.dataContainer}>
      <ul>
        {coins.map((coin) => (
          <MainDataItem
            key={coin.id}
            id={coin.id}
            symbol={coin.symbol}
            coinName={coin.coinName}
            price={coin.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainData;
