import Landing from './views/Landing';
import Home from './views/Home';
import FormSesion from './views/Sesion/FormSesion'
import { Route, Routes} from 'react-router-dom'
import './App.css';


function App() {
 


  return (
    <>
      <div className="App">
        
          <Routes>

              <Route exact path='/' element={<Landing/>}/>
              <Route path='/sesion' element={<FormSesion/>}/>
              <Route path='/home' element={<Home/>}/>

          </Routes>

      </div>
    </>
  );
}

export default App;
