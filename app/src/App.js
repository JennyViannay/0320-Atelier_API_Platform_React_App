import React from 'react';
import './App.css';
import { HydraAdmin } from "@api-platform/admin";
//import Books from './component/Books';


function App() {
  return (
    <div className="App">
      <HydraAdmin entrypoint="http://localhost:8000/api" />
      {/* <Books /> */}
    </div>
  );
}

export default App;
