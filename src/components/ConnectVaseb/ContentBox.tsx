/* eslint-disable prettier/prettier */

import React from 'react';
import styles from './ConnectVaseb.module.css';

interface ContentBoxProps {
  iconUrl: string;
  message: string;
  info: string;
  status: string;
  isEmail?: boolean;
  isNumber?: boolean;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  iconUrl,
  message,
  info,
  status,
  isEmail,
  isNumber,
}) => {
  return (
    <div
      className={`${isEmail && isNumber ? styles.contentBoxLight : styles.contentBoxDark} ${styles.contentBox}`}
    >
      <div className={styles.contentBoxImg}>
        <img src={iconUrl} alt={message} />
      </div>
      <h2>{message}</h2>
      {isEmail ? <a href={`mailto:${info}`}>{info}</a> : <h3>{info}</h3>}
      {isNumber ? <a href={`tel:${status}`}>{status}</a> : <p>{status}</p>}
    </div>
  );
};

export default ContentBox;
