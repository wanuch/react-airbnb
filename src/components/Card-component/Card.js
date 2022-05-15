import React from 'react';
import styles from './Card.module.css';
import katieZaferes from '../../images/katie-zaferes.png';
import star from '../../images/star.png';

const Card = () => (
  <section>
    <div className={styles.Card}>
      <img src={katieZaferes} alt="swim" className="card-image" />
      <div className="card-stats">
        <img src={star} alt="start" className="card-star" />
        <span>5.0</span>
        <span className="gray">(6) • </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p><span className="bold">From $136</span> / person</p>

    </div>
  </section>

);

export default Card;
