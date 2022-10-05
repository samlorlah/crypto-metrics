import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleCoin } from '../redux/coinList/coinList';
import styles from './CoinDetails.module.css';

function CoinDetails() {
  const { detailsList } = styles;
  const { id } = useParams();
  const coin = useSelector((state) => state.coins.coinDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleCoin(id));
  }, []);
  return (
    <>
      <ul className={detailsList}>
        <li>
          <h5>Name</h5>
          <p>{coin.name}</p>
        </li>
        <li>
          <h5>Symbol</h5>
          <p>{coin.symbol}</p>
        </li>
        <li>
          <h5>Price</h5>
          <p>
            ~ $
            { parseFloat(coin.priceUsd).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }
          </p>
        </li>
        <li>
          <h5>% Change (24 hrs)</h5>
          <p>
            {coin.changePercent24Hr}
          </p>
        </li>
        <li>
          <h5>Supply</h5>
          <p>
            {coin.supply}
          </p>
        </li>
        <li>
          <h5>VWAP (24 hrs)</h5>
          <p>
            ~ $
            { parseFloat(coin.vwap24Hr).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }
          </p>
        </li>
      </ul>
    </>
  );
}

export default CoinDetails;
