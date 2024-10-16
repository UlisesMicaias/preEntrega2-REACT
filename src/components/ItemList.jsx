import React from 'react';
import Item from './Item';
import styles from '../styles/itemList.module.css';

const ItemList = ({ items }) => {
    return (
        <div className={styles.itemList}>
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;

