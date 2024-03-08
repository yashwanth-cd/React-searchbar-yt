/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchBar({ setResults }) {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const res = json.filter(
          (user) =>
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
        );
        setResults(res);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <IoSearchSharp style={{ color: "royalblue" }} />
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
