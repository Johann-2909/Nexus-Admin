const products = [
  { id: 1, name: "Product 1", price: 19.99, stock: 10, category: "Category A" },
  { id: 2, name: "Product 2", price: 29.99, stock: 5, category: "Category B" },
  { id: 3, name: "Product 3", price: 39.99, stock: 15, category: "Category A" },
  { id: 4, name: "Product 4", price: 49.99, stock: 8, category: "Category C" },
];

function Products() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-left">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-2">{product.name}</td>
              <td className="p-2">${product.price.toFixed(2)}</td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
