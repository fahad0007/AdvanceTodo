
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Main from './components/main/Main';
import All from './components/all/All';
import Cart from './components/cart/Cart';
import Shopping from './components/shopping/Shopping';
import Study from './components/study/Study';
import Travel from './components/travel/Travel';
import Work from './components/work/Work';
import Create from './components/create/Create';
import Home from './components/home/Home';
import Task from './components/task/Task';

function App() {
  return (
    <div className="app">
      <div className="app_inner">
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/All' element={<All/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/Shopping' element={<Shopping/>}/>
          <Route path='/Study' element={<Study/>}/>
          <Route path='/Travel' element={<Travel/>}/>
          <Route path='/Work' element={<Work/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/task' element={<Task/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
