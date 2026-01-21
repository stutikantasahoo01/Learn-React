const App = () => {
  return (
    <div>
      <form className=" flex items-center gap-5 m-10 p-10 bg-blue-100 rounded-3xl w-fit" >
        <input type="text" placeholder="Enter note heading"  className='border-2 p-5'/>
        <textarea
          placeholder="Enter note here"
         className='border-2 p-10'
        ></textarea>
      </form>
    </div>
  );
};

export default App;
