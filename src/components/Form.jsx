import { v4 as uuid } from "uuid";
import { useState } from "react";

export default function Form({ setItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    setItems((items) => [...items, newItem]);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>Что вам нужно для идеальной поездки?😍</h3>

      <div style={{ display: "flex" }}>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type='text'
          placeholder='Введите...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type='submit'>Добавить</button>
    </form>
  );
}
