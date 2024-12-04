import React, { useRef, useState } from "react";
import tick from "../../assets/checked.png";
import untick from "../../assets/unchecked.png";
import remove from "../../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  const [changeTick, setChangeTick] = useState(false);

  return (
    <div className="flex items-center my-3 gap-2">
      <div
        onClick={() => toggle(id)}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img className="w-7" src={isComplete ? tick : untick} alt="" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={remove}
        className="w-4 cursor-pointer"
        alt=""
      />
    </div>
  );
};

export default TodoItems;
