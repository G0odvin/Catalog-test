import React from 'react';
import styles from './NotFound.module.scss';
import ErrorImg from '../../images/404 error interface art word.png';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.title}>Page is not found...</h1>
      <img src={ErrorImg} alt="" className={styles.img} />
    </div>

  )
}
