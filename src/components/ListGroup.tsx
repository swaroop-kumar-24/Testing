function ListGroup() {
  const items = ["New york", "London", "Tokyo", "Paris", "Delhi"];

  return (
    <>
      <h1>List1</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
