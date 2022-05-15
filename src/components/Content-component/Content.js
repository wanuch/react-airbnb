import React from 'react';
import styles from './Content.module.css';
import photoGrid from '../../images/photo-grid.png';

const Content = () => (
  <section>
    <div className={styles.Content}>
      <img className="hero-img" alt="heroes" src={photoGrid} />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">Join unique interactive activities led by
        one-of-a-kind hosts—all without leaving home.</p>

    </div>
  </section>

);

export default Content;
