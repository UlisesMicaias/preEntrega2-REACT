import React from 'react';
import Item from './Item';  

const ItemList = ({ items }) => {
    return (
        <div className="items-list">
        {items.length ? (
            items.map(item => (
            <Item key={item.id} item={item} />
            ))
        ) : (
            <p>No items available in this category.</p>
        )}
        </div>
    );
};

export default ItemList;
