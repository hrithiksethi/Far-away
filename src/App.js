import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [item, setItem] = useState([]);

  function handleAddItems(newItem) {
    setItem([...item, newItem]);
  }

  function handleDeleteItems(currentID) {
    setItem(item.filter((item) => item.id !== currentID));
  }

  function handleToggleItem(id) {
    setItem(
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    let result = window.confirm("Are you sure?");
    result && setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItems} />
      <PackingList
        item={item}
        onDelete={handleDeleteItems}
        addToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats item={item} />
    </div>
  );
}
