import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/products", label: "Products" },
  { to: "/orders", label: "Orders" },
]

function Sidebar() {
  return (

    
    <aside className="w-64 bg-gray-200 p-4 min-h-screen">
      <ul className="space-y-4 flex flex-col gap-2">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
