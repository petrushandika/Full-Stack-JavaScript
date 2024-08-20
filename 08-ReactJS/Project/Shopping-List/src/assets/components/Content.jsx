import { useState } from "react";
import ContentList from "../components/ContentList";
import "../styles/Content.css";
import Form from "./Form";

const Content = ({ items, handleAddItems, onDeleteItem, handleDoneItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="content-container">
      <Form handleAddItems={handleAddItems} />
      <ul className="content">
        {sortedItems.map((item) => (
          <ContentList
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            handleDoneItem={handleDoneItem}
          />
        ))}
      </ul>
      <div>
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="packed">Sort By Packed</option>
        </select>
      </div>
    </div>
  );
};

export default Content;
