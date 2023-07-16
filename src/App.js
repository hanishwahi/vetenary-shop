import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './Style/Style.css'
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';

function App() {
  const loggedUser = JSON.parse(localStorage.getItem('loggedin'));
  return (
    <>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>
          < Route path='/homepage' element={<HomePage/>} />
          
          {
            (loggedUser) ?< Route path='/homepage' element={<HomePage/>} />:null
          }
          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
        
      </BrowserRouter>

    

    </>
  );
}

export default App;
