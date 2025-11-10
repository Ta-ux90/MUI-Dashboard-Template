import './App.css';
import Dashboard from './components/Dashboard';
import Calender from './components/Calender';
import Apps from './components/Apps';
import SignIn from './components/SignIn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Dashboard />}></Route>
          <Route exact path='/calender' element={<Calender />}></Route>
          <Route exact path='/apps' element={<Apps />}></Route>
          <Route exact path='/signin' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
