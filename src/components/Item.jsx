import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div>
            <img src={item.img_url}/>
            <h2>{item.title}</h2>
            <span>{item.description}</span>
            <span>${item.duration_minutes}</span>
            <NavLink to={`/detail/${item.id}`}>
                <button>Detail</button>
            </NavLink>
        </div>
    )
}

export default Item
