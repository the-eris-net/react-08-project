import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetail from '@/pages/MovieDetail';
import App from '@/pages/App';
import Layout from '@/pages/Layout';
import { ThemeProvider } from './contexts/ThemeContext';
import SignUp from '@/pages/SignUp';
import Login from '@/pages/Login';
import { SupabaseProvider } from './supabase';
import { AuthProvider } from './contexts/AuthContext';
import Logout from '@/pages/Logout';
import MyPage from './pages/MyPage';
import { BookMarkProvider } from './contexts/BookMarkContext';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <ThemeProvider>
      <BookMarkProvider>
        <SupabaseProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<App />}></Route>
                <Route path="/details" element={<MovieDetail />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<SignUp />}></Route>
                <Route path="/mypage" element={<MyPage />}></Route>
              </Route>
              <Route path="/logout" element={<Logout />}></Route>
            </Routes>
          </BrowserRouter>
        </SupabaseProvider>
      </BookMarkProvider>
    </ThemeProvider>
  </AuthProvider>
);
