import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home/Home';
import { UserProvider } from './components/UserContext/UserContext';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';

function App() {
  return (
    <div className="app">
      <UserProvider>
      <Router>
      <Routes>
        <Route path="/create/" element={<Create/>}/>
        </Routes>
        <Routes>
        <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      <Routes>
        <Route path="/read/:id" element={<Read/>}/>
        </Routes>
      <Routes>
        <Route path="/delete/:id" element={<Delete/>} />
        </Routes>
        <Routes>
        <Route path="/" exact element={<Home/>} />
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
}

export default App;
