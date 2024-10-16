import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import movies from "../assets/mock.json";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

useEffect(() => {
    const fetchItems = async () => {
        if (categoryId) {
            const filteredItems = movies.filter(item => item.genre.toLowerCase() === categoryId.toLowerCase());
            setItems(filteredItems);
        } else {
            
            setItems(movies);
        }
    };

    fetchItems();
}, [categoryId]);

    return (
        <div>
            <h2>{categoryId ? `${categoryId.toUpperCase()} MOVIES` : 'All Movies'}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer;
