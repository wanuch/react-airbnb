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
        {props.openSpots === 0 && <div className="card-badge">SOLD OUT</div>}
        <img src={props.img} alt="png" className="card-image" />
        <div className="card-stats">
          <img src={star} alt="star" className="card-star" />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • </span>
          <span className="gray">{props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
      </div>
    </div>

  )
}

export default Card;
