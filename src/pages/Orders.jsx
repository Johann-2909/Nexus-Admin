const orders = [
  {
    id: 1,
    customer: "Siegbert Schnösel",
    date: "2023-01-01",
    status: "Pending",
    total: "$100.00",
  },
  {
    id: 2,
    customer: "larry lobster",
    date: "2023-01-02",
    status: "Shipped",
    total: "$150.00",
  },
  {
    id: 3,
    customer: "Con Fisch",
    date: "2023-01-03",
    status: "Delivered",
    total: "$200.00",
  },
  {
    id: 4,
    customer: "Frankie-Billy",
    date: "2023-01-04",
    status: "Cancelled",
    total: "$250.00",
  },
];

function Orders() {
  return (
    <div className="p-4">
      <h1>Orders</h1>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Customer</th>
            <th className="p-2 text-left">Date</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="p-2">{order.customer}</td>
              <td className="p-2">{order.date}</td>
              <td className="p-2">{order.status}</td>
              <td className="p-2">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
