import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BsCurrencyDollar } from 'react-icons/bs';
import styles from './PageBanner.module.css';

const PageBanner = ({ title, subHeader, description }) => (
  <>
    <div className={styles.pageBannerContainer}>
      <div>
        <IconContext.Provider value={{ style: { fontSize: '8rem', cursor: 'pointer' } }}>
          <BsCurrencyDollar />
        </IconContext.Provider>
      </div>
      <div className={styles.bannerTitle}>
        {title}
        <p>
          {subHeader}
        </p>
      </div>
    </div>
    <div className={styles.bannerFooter}>{description}</div>
  </>
);

PageBanner.propTypes = {
  title: PropTypes.string.isRequired,
  subHeader: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageBanner;
