import { useState } from "react";
import Upload from "./components/Upload";
import Chat from "./components/Chat";
import ChartView from "./components/ChartView";

function App() {
  const [data, setData] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>AI Data Analyst Dashboard</h1>

      <Upload setData={setData} />
      <Chat setData={setData} />
      <ChartView data={data} />
    </div>
  );
}

export default App;