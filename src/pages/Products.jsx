import { useState } from "react";

const products = [
  { id: 1, name: "Product 1", price: 19.99, stock: 10, category: "Category A" },
  { id: 2, name: "Product 2", price: 29.99, stock: 5, category: "Category B" },
  { id: 3, name: "Product 3", price: 39.99, stock: 15, category: "Category A" },
  { id: 4, name: "Product 4", price: 49.99, stock: 8, category: "Category C" },
];

function Products() {
  const [productsList, setProductsList] = useState(products);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("");

  function addProduct() {
    const newProduct = { id: Date.now(), name, price, stock, category };
    setProductsList([...productsList, newProduct]);
  }

  function deleteProduct(id) {
    setProductsList(productsList.filter((product) => product.id !== id));
  }

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addProduct();
        }}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="price"
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="stock"
          >
            Stock
          </label>
          <input
            type="number"
            id="stock"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Product Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="category"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Product Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Product
        </button>
      </form>
      <table className="w-full mt-4 border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Price</th>
            <th className="p-2 text-left">Stock</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsList.map((product) => (
            <tr key={product.id} className="border-t">
              <td className="p-2">{product.name}</td>
              <td className="p-2">${product.price.toFixed(2)}</td>
              <td className="p-2">{product.stock}</td>
              <td className="p-2">{product.category}</td>
              <td className="p-2">
                <button
                  onClick={() => deleteProduct(product.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Products;
