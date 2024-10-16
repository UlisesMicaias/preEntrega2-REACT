import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/item.module.css'; // Importamos el CSS modular

const Item = ({ item }) => {
    return (
        <div className={styles.item}>
            <img className={styles.itemImage} src={item.img_url} alt={item.title} />
            <h2 className={styles.itemTitle}>{item.title}</h2>
            <span className={styles.itemDescription}>{item.description}</span>
            <span className={styles.itemDuration}>${item.duration_minutes} mins</span>
            <NavLink to={`/detail/${item.id}`} className={styles.itemDetailButton}>
                <button className={styles.button}>Detail</button>
            </NavLink>
        </div>
    );
};

export default Item;

