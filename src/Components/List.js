import Item from '../Components/Item';
import React from 'react';
const List = ({initialStories}) => {
    return (
        <ul>
            {initialStories.map((item) => (
                <Item key={item.objectId} item={item} />
            ))}
        </ul>
    );
};

export default List;