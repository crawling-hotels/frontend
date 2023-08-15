import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailPage from './pages/DetailPage.tsx';
import MyPage from './pages/MyPage.tsx';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/Detail' element={<DetailPage />} />
          <Route path='/MyPage' element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
