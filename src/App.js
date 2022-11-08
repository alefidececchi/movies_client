// import logo from './logo.svg';
import './App.css';
import SignIn from './components/SignIn/SignIn.js'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
    <div className="App">
      <Routes >
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/*' element={<><h1>Hello world</h1></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
