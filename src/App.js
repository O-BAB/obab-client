import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Main from 'page/main/main';
import Posting from 'page/posting/posting';

function App() {
    return (
        <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/category/Posting/detail" element={<Posting />} />
                    </Routes>
                </Router>
        </div>
    );
}

export default App;
