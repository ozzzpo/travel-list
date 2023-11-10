export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Начните добавлять вещи в ваш список🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? "Всё собрано! Пора в путь✈️"
          : `Вещей в списке - ${items.length}, собрано -
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
