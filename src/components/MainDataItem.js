import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsArrowRightCircle } from 'react-icons/bs';
import styles from './MainData.module.css';

const MainDataItem = ({
  id,
  symbol,
  coinName,
  price,
}) => {
  const url = `/details/${id}`;
  return (
    <li>
      <div style={{ float: 'right', boxSizing: 'border-box' }}>
        <Link to={url}>
          <IconContext.Provider value={{ style: { fontSize: '20px', cursor: 'pointer', padding: '10px 10px 0 0' } }}>
            <BsArrowRightCircle />
          </IconContext.Provider>
        </Link>
      </div>
      <div className={styles.dataCategory}>
        <h5 className={styles.symbol}>{symbol}</h5>
        <div className={styles.nameAndPrice}>
          <h4>{coinName}</h4>
          <p>
            $
            { parseFloat(price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }
          </p>
        </div>
      </div>
    </li>
  );
};

MainDataItem.propTypes = {
  symbol: PropTypes.string.isRequired,
  coinName: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MainDataItem;
