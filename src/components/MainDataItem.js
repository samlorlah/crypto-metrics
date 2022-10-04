import React from 'react';
import { IconContext } from 'react-icons';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './MainData.module.css';

const MainDataItem = () => (
  <li>
    <div style={{ float: 'right', boxSizing: 'border-box' }}>
      <IconContext.Provider value={{ style: { fontSize: '20px', cursor: 'pointer', padding: '10px 10px 0 0' } }}>
        <BsArrowRightCircle />
      </IconContext.Provider>
    </div>
    <div className={styles.dataCategory}>
      <h5 className={styles.symbol}>BTC</h5>
      <div className={styles.nameAndPrice}>
        <h4>BITCOIN</h4>
        <p>$ 12,453.00</p>
      </div>
    </div>
  </li>
);

export default MainDataItem;
