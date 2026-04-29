const Contact = () => {
  return (
    <div className="p-4 m-4">
      <h1>Contact</h1>
      <input type="text" placeholder="name" className="border border-black p-2 m-2"></input>
      <input type="text" placeholder="message" className="border border-black p-2 m-2"></input>
      <button className="border border-black p-2 m-2 rounded-lg">Submit</button>
    </div>
  );
};

export default Contact;
