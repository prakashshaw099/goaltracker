import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { LiaEdit } from "react-icons/lia";
import { MdDeleteOutline } from "react-icons/md";

const TodoList = ({ listData = [], setTodoList, setEditableDt }) => {
  const checkTaskHandler = (isCheck, item, index) => {
    let newData = [...listData];
    newData?.splice(index, 1, {
      ...item,
      isCheck: isCheck,
    });

    setTodoList(newData);
  };
  return (
    <div>
      {listData?.map((item, index) => {
        return (
          <div className="flex justify-between items-center gap-2 rounded-lg border-2 py-4 pl-4 pr-3 mx-4 my-4">
            <div className="w-[80%] flex gap-3">
              {item?.isCheck ? (
                <FaCheck
                  className="text-[24px] text-[#5a9565] px-1 rounded-full bg-[#c9f7c8]"
                  onClick={() => checkTaskHandler(false, item, index)}
                />
              ) : (
                <FaRegCircle
                  className="text-[24px] text-[#f3f3f3] rounded-full bg-[#ffffff]"
                  onClick={() => checkTaskHandler(true, item, index)}
                />
              )}
              <div
                className={`truncate ${
                  item?.isCheck ? "line-through" : ""
                } text-[#9b9b9b]`}
              >
                {item?.task}
              </div>
            </div>
            <div className="flex gap-2">
              <LiaEdit
                className="text-[24px] text-[#858992]"
                onClick={() => {
                  let newData = [...listData];
                  newData?.splice(index, 1);

                  setTodoList(newData);
                  setEditableDt(item?.task);
                }}
              />
              <MdDeleteOutline
                className="text-[24px] text-[#858992]"
                onClick={() => {
                  let newData = [...listData];
                  newData?.splice(index, 1);

                  setTodoList(newData);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
