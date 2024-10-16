import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    if (!item) {
        return <p>Loading...</p>;
    }

    return (
        <div className="item-detail">
        <img src={item.img_url} alt={item.title} />
        <h2>{item.title}</h2>
        <p><strong>Genre:</strong> {item.genre}</p>
        <p><strong>Director:</strong> {item.director}</p>
        <p><strong>Rating:</strong> {item.rating}</p>
        <p><strong>Duration:</strong> {item.duration_minutes} minutes</p>
        <p><strong>Production Company:</strong> {item.production_company}</p>
        <p>{item.description}</p>
        </div>
    );
};

export default ItemDetail;

