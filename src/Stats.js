export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">Start adding Some items to your packing list 🚀</p>
    );

  const itemCount = item.length;
  const itemPacked = item.filter((item) => item.packed).length;
  const pratishat = Math.round((itemPacked / itemCount) * 100);
  return (
    <footer className="stats">
      <em>
        {pratishat === 100
          ? "You got everything! Ready to go ✈️"
          : `You have ${itemCount} items on your list, and you have already packed ${itemPacked} (${pratishat}%)`}
      </em>
    </footer>
  );
}
