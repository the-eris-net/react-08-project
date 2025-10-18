import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from '@/pages/MovieDetail';
import App from '@/pages/App';
import Layout from '@/pages/Layout';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />}></Route>
        <Route path="/details" element={<MovieDetail />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
