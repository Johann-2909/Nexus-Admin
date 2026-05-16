import { Link } from "react-router-dom";

const links = [
  { to: "/", label: "Dashboard" },
  { to: "/products", label: "Products" },
  { to: "/orders", label: "Orders" },
];

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-200 p-4 min-h-screen">
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="block p-2 rounded hover:bg-gray-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
    </aside>
  );
}

export default Sidebar;
