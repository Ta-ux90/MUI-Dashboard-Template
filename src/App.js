import './App.css';
import Dashboard from './components/Dashboard';
import Calender from './components/Calender';
import Apps from './components/Apps';
import SignIn from './components/SignIn';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard />}></Route>
          <Route exact path='/calender' element={<Calender />}></Route>
          <Route exact path='/apps' element={<Apps />}></Route>
          <Route exact path='/signin' element={<SignIn />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
