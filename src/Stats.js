export function Stats({ items }) {
  const x = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <em>
        You have {x} items on your list, and you already packed {numPacked} (
        {Math.round((numPacked / x) * 100)}%)
      </em>
    </footer>
  );
}
