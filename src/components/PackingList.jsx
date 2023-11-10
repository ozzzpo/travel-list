import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, setItems }) {
  const [sortBy, setSortBy] = useState("input");

  const handleCLearList = () => {
    const confirmed = window.confirm("Вы уверены, что хотите очистить список?");
    if (confirmed) setItems([]);
  };

  let sortedItems;
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} setItems={setItems} key={item.id} />
        ))}
      </ul>

      <div className='actions'>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
        >
          <option value='input'>Сортировать по порядку</option>
          <option value='description'>Сортировать по описанию</option>
          <option value='packed'>Сортировать по статусу</option>
        </select>

        <button onClick={handleCLearList}>Очистить список</button>
      </div>
    </div>
  );
}
