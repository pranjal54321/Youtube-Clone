import React, { useState } from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

export default function Home({ sidebar }) {
  const [category, setCategory] = useState(0);
  return (
    <div>
      <Sidebar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? " " : "large-container"}`}>
        <Feed category={category} />
      </div>
    </div>
  );
}
