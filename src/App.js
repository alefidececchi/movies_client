// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'

import Dashboard from './components/Dashboard/Dasboard.js'
import Form from './components/Form/Form';
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
        <Route path='/series' element={<><h1>Hello world</h1><Series /></>}></Route>
        <Route path='/dashboard/:selected' element={<Dashboard />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/form/:id' element={<Form />}></Route>
        <Route path='/form' element={<Form />}></Route>
        <Route path='/' element={<><h1>Hello world</h1><Movies /></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
