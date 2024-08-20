import Header from "./assets/components/Header";
import Content from "./assets/components/Content";
import Footer from "./assets/components/Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleDoneItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div>
      <Header />
      <Content
        items={items}
        handleAddItems={handleAddItems}
        onDeleteItem={handleDeleteItems}
        handleDoneItem={handleDoneItem}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
