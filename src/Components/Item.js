import React from 'react';
const Item = ({item}) => {
    return (
        <li>
          <span>
            <a href={item.url}>
              {item.title} 
            </a>
          </span>
          <span> {item.author} </span>
          <span>{item.num_comments} </span>
          <span>{item.points}</span>
        </li>
        );
}

export default Item;