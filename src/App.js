import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const postFile = (file) => {
    const formdata = new FormData();
    formdata.append("file", file);
    postFiles(formdata, "file");
  };

  const postMultipleFile = (filelist) => {
    const formdata = new FormData();
    for (let index = 0; index < filelist.length; index++) {
      const file = filelist[index];
      formdata.append("files", file);
    }
    postFiles(formdata, "multifiles");
  };

  const postFiles = async (formdata, endpoint) => {
    try {
      const result = await axios.post(
        `http://localhost:4000/${endpoint}`,
        formdata
      );
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          const file = event.target.files[0];
          postFile(file);
        }}
      ></input>

      <input
        type="file"
        multiple
        onChange={(event) => {
          const filelist = event.target.files;
          postMultipleFile(filelist);
        }}
      ></input>
    </div>
  );
}

export default App;
