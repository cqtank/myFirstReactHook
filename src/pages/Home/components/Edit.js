import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function changeName(e) {
    setName(e.target.value);
  }

  function changeMsg(e) {
    setMsg(e.target.value);
  }

  function changeDate(e) {
    setDate(e.target.value);
  }

  function changeTime(e) {
    setTime(e.target.value);
  }

  function addItem() {
    submittingStatus.current = true;
    add(function (prevData) {
      return [
        {
          id: uuidv4(),
          name,
          msg,
          date,
          time,
        },
        ...prevData,
      ];
    });
  }
  return (
    <div>
      <h1>Notebook</h1>
      <p>Name:</p>
      <input type="text" value={name} onChange={changeName} />
      <p>Message:</p>
      <input type="text" value={msg} onChange={changeMsg} />
      <p>Date:</p>
      <input type="date" value={date} onChange={changeDate} />
      <p>Time:</p>
      <input type="time" value={time} onChange={changeTime} />
      <button className="add" onClick={addItem}>
        Add item
      </button>
    </div>
  );
};

export default Edit;
