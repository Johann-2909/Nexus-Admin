import Statcard from "../components/Statcard";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { day: "Mon", revenue: 1200 },
  { day: "Tue", revenue: 1800 },
  { day: "Wed", revenue: 900 },
  { day: "Thu", revenue: 2400 },
  { day: "Fri", revenue: 3100 },
  { day: "Sat", revenue: 2800 },
  { day: "Sun", revenue: 1500 },
];

const stats = [
  { title: "Total Revenue", value: "$12,345" },
  { title: "Total Orders", value: "123" },
  { title: "Total Products", value: "45" },
  { title: "Total Customers", value: "67" },
];

function Dashboard() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {stats.map((stat, index) => (
          <Statcard key={index} title={stat.title} value={stat.value} />
        ))}
      </div>
      <div className="mt-4">
        <h1 className="text-xl font-bold mb-2">Revenue This Week</h1>
        <BarChart width={600} height={300} data={data}>
          <Bar dataKey="revenue" fill="#8884d8" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
        </BarChart>
      </div>
    </div>
  );
}

export default Dashboard;
