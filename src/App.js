import './App.css';
import React from 'react';
import {RouterProvider} from 'react-router-dom';
import router from "./router/router";

function App() {
  return (
    <div className="App">
      {/*<Router>*/}
      {/*    <Routes>*/}
      {/*        <Route path="/" element={<Main />} />*/}
      {/*        <Route path="/category/Posting/detail" element={<Posting />} />*/}
      {/*    </Routes>*/}
      {/*</Router>*/}
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
