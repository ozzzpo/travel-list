import { useEffect, useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
const initialItems =
  localStorage.getItem("items") !== null
    ? JSON.parse(localStorage.getItem("items"))
    : [];
function App() {
  const [items, setItems] = useState(initialItems);
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  return (
    <div className='App'>
      <Logo />
      <Form setItems={setItems} />
      <PackingList items={items} setItems={setItems} />
      <Stats items={items} />
    </div>
  );
}

export default App;
