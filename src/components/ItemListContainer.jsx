import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movies from "../assets/mock.json"

const ItemListContainer = () => {
    const { categoryId } = useParams(); // Get categoryId from the URL
    const [items, setItems] = useState([]);

useEffect(() => {
    const fetchItems = async () => {
      // Simulate fetching data based on the categoryId
    const filteredItems = movies.filter(item => item.genre.toLowerCase() === categoryId);
    setItems(filteredItems);
    };

    fetchItems();
    }, [categoryId]);

    return (
        <div>
        <h2>{categoryId} Items</h2>
        <div>
            {items.length ? (
            items.map(item => (
                <div key={item.title}>
                <img src={item.img_url} alt={item.title} />
                <p>{item.title}</p>
                </div>
            ))
            ) : (
            <p>No items available in this category.</p>
            )}
        </div>
        </div>
    );
};

export default ItemListContainer;

