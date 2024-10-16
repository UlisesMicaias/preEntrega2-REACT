import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import movies from "../assets/mock.json";
import styles from '../styles/itemListContainer.module.css';

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setLoading(true);
                await new Promise((resolve) => 
                    setTimeout(() => resolve(), 2000)
                );
                
                if (categoryId) {
                    const filteredItems = movies.filter(item => item.genre.toLowerCase() === categoryId.toLowerCase());
                    setItems(filteredItems);
                } else {
                    setItems(movies);
                }
            } catch (error) {
                console.error("Error!!!", error);
            } finally {
                setLoading(false); 
            }
        };

        fetchItems();
    }, [categoryId]);

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>
                {loading ? 'Loading...' : (categoryId ? `${categoryId.toUpperCase()} MOVIES` : 'PELICULAS')}
            </h2>
            {!loading && <ItemList items={items} />}
        </div>
    );
};

export default ItemListContainer;


