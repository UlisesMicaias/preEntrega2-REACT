import React from 'react';
import styles from '../styles/itemDetail.module.css';

const ItemDetail = ({ item }) => {
    return (
        <div className={styles.itemDetail}>
            <img className={styles.itemImage} src={item.img_url} alt={item.title} />
            <h2 className={styles.itemTitle}>{item.title}</h2>
            <p className={styles.itemGenre}><strong>Genre:</strong> {item.genre}</p>
            <p className={styles.itemDirector}><strong>Director:</strong> {item.director}</p>
            <p className={styles.itemRating}><strong>Rating:</strong> {item.rating}</p>
            <p className={styles.itemDuration}><strong>Duration:</strong> {item.duration_minutes} mins</p>
            <p className={styles.itemProduction}><strong>Production Company:</strong> {item.production_company}</p>
            <p className={styles.itemDescription}>{item.description}</p>
        </div>
    );
};

export default ItemDetail;


