import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';

// 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>} />  
          <Route path="/watch" element={<Watch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// 리액트에서는 라우터로 페이지 처리를 한다.
//{/* 주소창에 관려이있기때문에 컴포넌트 이름과는 상관이없다*/}