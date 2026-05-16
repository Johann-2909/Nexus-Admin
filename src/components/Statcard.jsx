function Statcard({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow-md p-6 font-bold">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default Statcard;
