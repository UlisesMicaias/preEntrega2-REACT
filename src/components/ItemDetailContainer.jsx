import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../assets/mock.json";


const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
        const filteredItems = movies.filter((item) =>
            categoryId ? item.genre.toLowerCase() === categoryId : true
        );
        setItems(filteredItems);
        };

        fetchItems();
    }, [categoryId]);

    return (
        <div>
        <h2>{categoryId ? `Category: ${categoryId}` : "All Items"}</h2>
        <ul>
            {items.map((item) => (
            <li key={item.id}>
                <Link to={`/item/${item.id}`}>{item.title}</Link>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default ItemListContainer;
