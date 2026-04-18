import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function ChartView({ data }) {

  if (!data || !data.result) return null;

  try {
    // Convert string to usable format
    const parsed = JSON.parse(data.result);

    const chartData = Object.keys(parsed).map((key) => ({
      name: key,
      value: parsed[key],
    }));

    return (
      <div>
        <h3>Chart</h3>

        <BarChart width={500} height={300} data={chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </div>
    );

  } catch {
    return <pre>{data.result}</pre>;
  }
}

export default ChartView;