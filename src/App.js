import './App.css';
import Appbar from './components/Appbar';
import Book from './components/Book';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header><Appbar/></header>
        <Routes>
          <Route path='/' Component={Book}/>
          <Route path='register' Component={Register}/>
          <Route path='login' Component={Login}/>
        </Routes>
      </BrowserRouter>
      {/* <Appbar/>
      <Book/> */}
    </div>
  );
}

export default App;
