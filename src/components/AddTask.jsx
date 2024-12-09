import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";

const AddTask = ({ setTodoList }) => {
  const uid = Math.random().toString(16).slice(2);

  const [task, setTask] = useState("");

  let width = document.documentElement.clientWidth;

  return (
    <div className="fixed bottom-4 mx-4 flex">
      {/* <div className="relative"> */}
      <input
        type="text"
        placeholder="Add Item"
        className="bg-[#ecf1f5] rounded-full p-5 pr-[60px] text-[#858992] decoration-transparent outline-none"
        style={{ width: `${width - 32}px` }}
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />
      <FaCirclePlus
        className="text-[45px] text-[#3d7ab3] absolute bottom-[9.5px] right-2"
        onClick={() => {
          setTask("");
          setTodoList((prevData) => [
            { id: uid, isCheck: false, task: task },
            ...prevData,
          ]);
        }}
      />
      {/* </div> */}
    </div>
  );
};

export default AddTask;
