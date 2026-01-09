const component = () => {
  const user = "Lipu";
  const email = "Stutikantasahoo@gmail.com";
  return (
    <>
      <div className="card">
        <h1>Hello {user}</h1>
        <h2>This is your email id, {email}</h2>
      </div>
    </>
  );
};

export default component;
