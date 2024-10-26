import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute'

import Home from './pages/Home';
import Success from './pages/Success';
import Error from './pages/Error';



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<ProtectedRoute element={<Success/>}/>}
         />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </Router>
  )
}

export default App
