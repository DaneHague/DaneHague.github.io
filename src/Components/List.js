import Item from '../Components/Item';
const List = ({initialStories}) => {
    console.log(initialStories);
    return (
        <ul>
            {initialStories.map((item) => (
                <Item key={item.objectId} item={item} />
            ))}
        </ul>
    );
};

export default List;