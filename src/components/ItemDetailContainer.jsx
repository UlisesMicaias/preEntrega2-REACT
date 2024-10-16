import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movies from '../assets/mock.json';
import ItemDetail from './ItemDetail';
import styles from '../styles/itemDetailContainer.module.css';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            const foundItem = movies.find(movie => movie.id === parseInt(itemId));
            setItem(foundItem);
        };

        fetchItem();
    }, [itemId]);

    return (
        <div className={styles.container}>
            {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
        </div>
    );
};

export default ItemDetailContainer;


