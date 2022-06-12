import Header from "./components/Header"
import '../global.css'
import NewTask from "./components/NewTask"

import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Header />
      <NewTask />  
    </div>
  )
}

export default App;
