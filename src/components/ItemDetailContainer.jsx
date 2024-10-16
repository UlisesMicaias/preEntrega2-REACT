import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movies from "../assets/mock.json";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
        const foundItem = movies.find(movie => movie.id === itemId);
        setItem(foundItem);
        };

    fetchItem();
}, [itemId]);

    return (
        <div>
        <h2>Item Details</h2>
        <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;

