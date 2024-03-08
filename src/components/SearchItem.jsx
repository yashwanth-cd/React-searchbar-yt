/* eslint-disable react/prop-types */
export default function SearchItem({ item }) {
  return (
    <div
      className="search-item"
      onClick={() => console.log(`You clicked on ${item.name}`)}
    >
      {item.name}
    </div>
  );
}
