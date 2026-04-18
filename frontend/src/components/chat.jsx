import { useState } from "react";
import axios from "axios";

function Chat({ setData }) {
  const [query, setQuery] = useState("");

  const handleAsk = async () => {
    const res = await axios.post("http://127.0.0.1:8000/query", {
      query: query,
    });

    setData(res.data);
  };

  return (
    <div>
      <h3>Ask Question</h3>

      <input
        type="text"
        placeholder="e.g. total sales by product"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button onClick={handleAsk}>Ask</button>
    </div>
  );
}

export default Chat;