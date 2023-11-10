export default function Item({ item, setItems }) {
  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => id !== item.id));
  };

  const handleToggle = (id) => {
    setItems((items) => [
      ...items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      ),
    ]);
  };

  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => handleToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}
