import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from '@/pages/MovieDetail';
import App from '@/pages/App';
import Layout from '@/pages/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import SiginUp from '@/pages/SignUp';

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />}></Route>
          <Route path="/details" element={<MovieDetail />}></Route>
          <Route path="/signup" element={<SiginUp />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
