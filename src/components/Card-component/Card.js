import React from 'react';
import star from '../../images/star.png';
import styles from './Card.module.css';

const Card = (props) => {
  let badgeText
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  }


  return (
    <div className={styles.Card}>
      <div className="card">
        {badgeText && <div className="card-badge">{badgeText}</div>}
        <img src={props.coverImg} alt="png" className="card-image" />
        <div className="card-stats">
          <img src={star} alt="star" className="card-star" />
          <span>{props.stats.rating}</span>
          <span className="gray">({props.stats.reviewCount}) • </span>
          <span className="gray">{props.location}</span>
        </div>
        <p className="card-title">{props.title}</p>
        <p className="card-price"><span className="bold">From ${props.price}</span> / person</p>
      </div>
    </div>
  )
}

export default Card;
