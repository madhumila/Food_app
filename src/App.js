import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Component/Details";
import Main from "./Component/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Main />}/>
          <Route path="/details/:id" element={<Details />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
