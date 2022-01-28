import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants";

import "./index.css";
import Edit from "./components/Edit";
import List from "./components/List";

const Home = () => {
  const [items, setItems] = useState([]);
  const submittingStatus = useRef(false);
  async function fetchData() {
    const res = await fetch(API_GET_DATA);
    const { data } = await res.json();
    setItems(data);
  }

  async function setFetchData(data) {
    await fetch(API_GET_DATA, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
  }

  useEffect(() => {
    fetchData();
    console.log("getFetch");
  }, []);

  useEffect(() => {
    if (submittingStatus.current === false) return;

    setFetchData(items).then(() => (submittingStatus.current = true));
    console.log("setFetch");
  }, [items]);

  return (
    <div className="app">
      My first Hooks :))
      <Edit add={setItems} submittingStatus={submittingStatus} />
      <List
        listData={items}
        deleteData={setItems}
        submittingStatus={submittingStatus}
      />
    </div>
  );
};

export default Home;
