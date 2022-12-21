// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dasboard.js'
import Form from './components/Form/Form';
import Login from './components/Login/Login.js'
import Movies from './components/Movies/Movies.js'
import Navbar from './components/Navbar/Navbar';
import Series from './components/Series/Series.js'
import SignIn from './components/SignIn/SignIn.js'


function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes >
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/series' element={<Series />}></Route>
        <Route path='/dashboard/form/:id' element={<Form />}></Route>
        <Route path='/dashboard/form' element={<Form />}></Route>
        <Route path='/dashboard/:selected' element={<Dashboard />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={<Movies />}></Route>
      </Routes>
    </div>
  );
}

export default App;
