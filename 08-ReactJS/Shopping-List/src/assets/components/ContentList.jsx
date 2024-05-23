import "../styles/ContentList.css";

const List = ({ item, onDeleteItem, handleDoneItem }) => {
  const { product, quantity, packed } = item;
  return (
    <li className="contentList">
      <span>{quantity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>
      <div className="button">
        <button onClick={() => handleDoneItem(item.id)} className="done">Done</button>
        <button onClick={() => onDeleteItem(item.id)} className="delete">Delete</button>
      </div>
    </li>
  );
};

export default List;
