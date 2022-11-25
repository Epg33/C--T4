import Crear from './Crear'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Crear />}></Route>
          <Route path='/Crear' element={<></>}></Route>
          <Route path='/Producto' element={<></>}></Route>
          <Route path='/Error' element={<></>}></Route>
        </Routes>
     </BrowserRouter>     
    </>
  );
}

export default App;
