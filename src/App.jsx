// import React, { useState } from "react";

// function App() {
//   const [value, setValue] = useState(false);
//   const [data, setData] = useState();

//   const Handle = (e) => {
//     setData(e.target.value);
//   };

//   const inputValueAdd = () => {
//     setValue(true);
//   };

//   return (
//     <div>
//       <input placeholder="reja qo'shing..." type="text" onChange={Handle} />
//       <button className="ml-[50px]" onClick={inputValueAdd}>
//         Add
//       </button>
//       <div>{value && <h1>{data}</h1>}</div>
//     </div>
//   );
// }

// export default App;

import React from "react";
import TodoList from "./Components/actions/TodoList";
import TodoFrom from "./Components/todoFrom";

function App() {
  return (
    <div>
      <TodoFrom />
      <TodoList />
    </div>
  );
}

export default App;
