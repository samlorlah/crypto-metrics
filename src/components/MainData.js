import React from 'react';
import styles from './MainData.module.css';
import MainDataItem from './MainDataItem';

const MainData = () => (
  <div className={styles.dataContainer}>
    <ul>
      <MainDataItem />
    </ul>
  </div>
);

export default MainData;
